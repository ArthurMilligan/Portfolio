interface ISkills {
  level: number;
  name: string;
}

export const sortSkills = (skills?: ISkills[]): ISkills[] =>
  skills?.sort((a, b) => {
    if (a.level === b.level) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }

      return 0;
    }

    return b.level - a.level;
  }) ?? [];
