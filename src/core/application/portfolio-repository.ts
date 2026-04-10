import type { ContactChannel } from '../domain/contact-channel';
import type { Experience } from '../domain/experience';
import type { Profile } from '../domain/profile';
import type { Project } from '../domain/project';
import type { SkillGroup } from '../domain/skill-group';

export interface PortfolioRepository {
  loadProfile(): Promise<Profile>;
  loadExperiences(): Promise<Experience[]>;
  loadSkillGroups(): Promise<SkillGroup[]>;
  loadContactChannels(): Promise<ContactChannel[]>;
  loadCuratedProjects(): Promise<Project[]>;
}

export interface HomePageModel {
  profile: Profile;
  experiences: Experience[];
  skills: SkillGroup[];
  contacts: ContactChannel[];
  projects: Project[];
}
