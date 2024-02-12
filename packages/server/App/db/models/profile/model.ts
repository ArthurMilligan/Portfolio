import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  // HasOne,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Skills } from '../skills';
import { Jobs } from '../jobs';
import { Education } from '../education';
import { Elements } from '../elements';

export interface IProfileAttributes {
  name: string;
  avatar: string;
  age: number;
  about: string;
  mail: string;
  mailUrl: string;
  gitHub: string;
  gitHubUrl: string;
  telegram: string;
  telegramUrl: string;
  proffesion: string;
  keySkills: string[];
  achievements: string[];
  folderId: number;
  hobbys: string;
}

@Table({ tableName: 'profile', timestamps: false })
class Profile extends Model<Profile, IProfileAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  avatar: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  age: number;

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  about: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mail: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mailUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gitHub: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gitHubUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  telegram: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  telegramUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  proffesion: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  keySkills: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  achievements: string[];

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  hobbys: string;

  @HasMany(() => Skills)
  skills: Skills[];

  @HasMany(() => Jobs)
  jobs: Jobs[];

  @HasMany(() => Education)
  education: Education[];

  @ForeignKey(() => Elements)
  elementId: number;

  @BelongsTo(() => Elements)
  element: Elements;
}

export default Profile;
