import { useEffect, useState } from 'react';
import {
  getGitHubProfile,
  getPublicRepositories,
  type GitHubRepository,
  type GitHubUser,
} from '../services/github';
import { portfolioConfig } from '../config';

type GitHubPortfolioState = {
  error: string | null;
  isLoading: boolean;
  profile: GitHubUser | null;
  repositories: GitHubRepository[];
  isUsingFallback: boolean;
};

export function useGithubPortfolio(username: string) {
  const [state, setState] = useState<GitHubPortfolioState>({
    error: null,
    isLoading: true,
    profile: null,
    repositories: [],
    isUsingFallback: false,
  });

  useEffect(() => {
    if (!username || username === 'seu-usuario') {
      setState({
        error: null, // Mudamos para null porque vamos exibir o fallback mesmo se o usuário não configurou
        isLoading: false,
        profile: null,
        repositories: portfolioConfig.fallbackRepositories || [],
        isUsingFallback: true,
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
            isUsingFallback: false,
          });
        }
      } catch (error) {
        if (didDispose) {
          return;
        }

        const fallback = portfolioConfig.fallbackRepositories || [];

        if (!controller.signal.aborted) {
          setState({
            error: null, // Sem erro na tela, pois carregamos o fallback com sucesso!
            isLoading: false,
            profile: null,
            repositories: fallback,
            isUsingFallback: true,
          });
          console.warn('useGithubPortfolio: Erro ao carregar da API do GitHub. Usando fallback estático.', error);
        } else if (didTimeout) {
          setState({
            error: null,
            isLoading: false,
            profile: null,
            repositories: fallback,
            isUsingFallback: true,
          });
          console.warn('useGithubPortfolio: Timeout ao carregar da API do GitHub. Usando fallback estático.');
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
