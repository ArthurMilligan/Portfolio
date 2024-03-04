import { type TIconName } from '@ui';

export interface IProject {
  name: string;
  description: string;
  tasks: string[];
  stack: string[];
  projectUrl: string;
  codeUrl: string;
  projectType: string;
  icon: TIconName;
  iframeUrl: string;
}
