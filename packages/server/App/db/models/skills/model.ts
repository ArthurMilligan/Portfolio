import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Profile } from '../profile';

export interface ISkillsAttributes {
  profileId: number;
  name: string;
  level: number;
  type: string;
}

@Table({ tableName: 'skills', timestamps: false })
class Skills extends Model<Skills, ISkillsAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Profile)
  profileId: number;

  @BelongsTo(() => Profile)
  profile: Profile;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  type: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  level: number;
}

export default Skills;
