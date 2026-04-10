import type { HomePageModel, PortfolioRepository } from './portfolio-repository';
import type { GitHubProjectSource } from './github-project-source';

export class BuildHomePageUseCase {
  constructor(
    private readonly repository: PortfolioRepository,
    private readonly githubProjects: GitHubProjectSource,
  ) {}

  async execute(): Promise<HomePageModel> {
    const [profile, experiences, skills, contacts, curatedProjects] = await Promise.all([
      this.repository.loadProfile(),
      this.repository.loadExperiences(),
      this.repository.loadSkillGroups(),
      this.repository.loadContactChannels(),
      this.repository.loadCuratedProjects(),
    ]);

    const githubProjects = await this.githubProjects.loadFeaturedProjects();
    const projects = this.mergeProjects(curatedProjects, githubProjects).slice(0, 6);

    return { profile, experiences, skills, contacts, projects };
  }

  private mergeProjects(curated: Awaited<ReturnType<PortfolioRepository['loadCuratedProjects']>>, github: Awaited<ReturnType<GitHubProjectSource['loadFeaturedProjects']>>) {
    const seen = new Set<string>();
    return [...curated, ...github].filter((project) => {
      const key = project.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return project.featured;
    });
  }
}
