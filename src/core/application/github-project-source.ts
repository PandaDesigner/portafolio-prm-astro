import type { Project } from '../domain/project';

export interface GitHubProjectSource {
  loadFeaturedProjects(): Promise<Project[]>;
}
