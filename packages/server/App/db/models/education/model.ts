import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Profile } from '../profile';

export interface IEducationAttributes {
  profileId: number;
  place: string;
  dateStart: Date;
  dateEnd: Date;
  direction: string;
  courseName: string;
  type: string;
}

@Table({ tableName: 'education', timestamps: false })
class Education extends Model<Education, IEducationAttributes> {
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
  place: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  direction: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  courseName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  type: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  dateStart: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  dateEnd: Date;
}

export default Education;
