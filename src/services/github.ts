export type GitHubUser = {
  avatar_url: string;
  bio: string | null;
  html_url: string;
  login: string;
  name: string | null;
  public_repos: number;
};

export type GitHubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const githubHeaders = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

async function requestGitHub<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, {
    headers: githubHeaders,
    signal,
  });

  if (!response.ok) {
    throw new Error(`GitHub respondeu com status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getGitHubProfile(username: string, signal?: AbortSignal) {
  return requestGitHub<GitHubUser>(`https://api.github.com/users/${username}`, signal);
}

export async function getPublicRepositories(username: string, signal?: AbortSignal) {
  const repositories = await requestGitHub<GitHubRepository[]>(
    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=30`,
    signal,
  );

  return repositories.filter((repository) => !repository.fork && !repository.archived);
}
