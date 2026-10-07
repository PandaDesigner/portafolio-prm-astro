import type { Education } from '@/core/domain/education';
import type { ContactChannel } from '@/core/domain/contact-channel';
import type { Experience } from '@/core/domain/experience';
import type { Profile } from '@/core/domain/profile';
import type { Project } from '@/core/domain/project';
import type { SkillGroup } from '@/core/domain/skill-group';

export interface PortfolioRepository {
  loadEducation(): Promise<Education[]>;
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
