interface IPlaceWithDates {
  place: string;
  dateStart: Date;
  dateEnd: Date;
}
interface IJob extends IPlaceWithDates {
  position: string;
  tasks: string[];
}
interface IEducation extends IPlaceWithDates {
  direction: string;
}
interface ISkill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}
interface IAdditionalEducation extends IPlaceWithDates {
  courseName: string;
}
export interface IProfile {
  name: string;
  avatar: string;
  age: number;
  about: string;
  mail: {
    name: string;
    url: string;
  };
  gitHub: {
    name: string;
    url: string;
  };
  telegram: {
    name: string;
    url: string;
  };
  proffesion: string;
  experience: IJob[];
  education: IEducation[];
  additionalEducation: IAdditionalEducation[];
  keySkills: string[];
  hardSkills: ISkill[];
  achievements: string[];
  softSkills: ISkill[];
  hobbys: string;
}
