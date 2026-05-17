import { useEffect, useState } from 'react';
import {
  getGitHubProfile,
  getPublicRepositories,
  type GitHubRepository,
  type GitHubUser,
} from '../services/github';

type GitHubPortfolioState = {
  error: string | null;
  isLoading: boolean;
  profile: GitHubUser | null;
  repositories: GitHubRepository[];
};

export function useGithubPortfolio(username: string) {
  const [state, setState] = useState<GitHubPortfolioState>({
    error: null,
    isLoading: true,
    profile: null,
    repositories: [],
  });

  useEffect(() => {
    if (!username || username === 'seu-usuario') {
      setState({
        error: 'Configure seu usuário do GitHub em VITE_GITHUB_USERNAME.',
        isLoading: false,
        profile: null,
        repositories: [],
      });
      return;
    }

    const controller = new AbortController();
    let didDispose = false;
    let didTimeout = false;
    const timeoutId = window.setTimeout(() => {
      didTimeout = true;
      controller.abort();
    }, 8000);

    async function loadPortfolio() {
      setState((currentState) => ({
        ...currentState,
        error: null,
        isLoading: true,
      }));

      try {
        const [profile, repositories] = await Promise.all([
          getGitHubProfile(username, controller.signal),
          getPublicRepositories(username, controller.signal),
        ]);

        if (!controller.signal.aborted) {
          setState({
            error: null,
            isLoading: false,
            profile,
            repositories,
          });
        }
      } catch (error) {
        if (didDispose) {
          return;
        }

        if (!controller.signal.aborted) {
          setState({
            error: error instanceof Error ? error.message : 'Não foi possível carregar seus projetos.',
            isLoading: false,
            profile: null,
            repositories: [],
          });
        } else if (didTimeout) {
          setState({
            error: 'A conexão com o GitHub demorou demais. Tente recarregar a página.',
            isLoading: false,
            profile: null,
            repositories: [],
          });
        }
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    void loadPortfolio();

    return () => {
      didDispose = true;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [username]);

  return state;
}
