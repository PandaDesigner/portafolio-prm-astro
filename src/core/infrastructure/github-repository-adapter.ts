import { Project } from '../domain/project';
import type { GitHubProjectSource } from '../application/github-project-source';

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  private: boolean;
};

export class GitHubRepositoryAdapter implements GitHubProjectSource {
  constructor(
    private readonly username: string,
    private readonly fallback: readonly Project[],
  ) {}

  async loadFeaturedProjects(): Promise<Project[]> {
    if (!this.username) {
      return [...this.fallback];
    }

    try {
      const response = await fetch(`https://api.github.com/users/${this.username}/repos?per_page=100&sort=updated`);
      if (!response.ok) {
        return [...this.fallback];
      }

      const repos = (await response.json()) as GitHubRepo[];

      return repos
        .filter((repo) => !repo.fork && !repo.archived && !repo.private)
        .slice(0, 4)
        .map(
          (repo) =>
            new Project(
              repo.name,
              repo.description ?? 'Proyecto destacado desde GitHub.',
              repo.homepage ?? repo.html_url,
              [repo.language ?? 'Code', ...(repo.topics ?? []).slice(0, 2)],
              repo.stargazers_count,
              'github',
            ),
        );
    } catch {
      return [...this.fallback];
    }
  }
}
