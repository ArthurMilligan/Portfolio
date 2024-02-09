import { Elements, type IElementsAttributes } from './elements';
import { Education, type IEducationAttributes } from './education';
import { Folders, type IFoldersAttributes } from './folders';
import { Jobs, type IJobsAttributes } from './jobs';
import { Profile, type IProfileAttributes } from './profile';
import { Skills, type ISkillsAttributes } from './skills';
import { Desktop, type IDesktopAttributes } from './desktop';
import { type IProjectsAttributes, Projects } from './projects';

export {
  Desktop,
  Elements,
  Education,
  Folders,
  Jobs,
  Profile,
  Skills,
  Projects,
};

export type {
  IDesktopAttributes,
  IElementsAttributes,
  IEducationAttributes,
  IFoldersAttributes,
  IJobsAttributes,
  IProfileAttributes,
  ISkillsAttributes,
  IProjectsAttributes,
};

export default [
  Desktop,
  Elements,
  Education,
  Folders,
  Jobs,
  Profile,
  Skills,
  Projects,
];
