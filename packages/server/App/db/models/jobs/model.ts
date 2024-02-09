import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Profile } from '../profile';

export interface IJobsAttributes {
  profileId: number;
  place: string;
  tasks: string[];
  dateStart: Date;
  dateEnd: Date;
  postion: string;
}

@Table({ tableName: 'jobs', timestamps: false })
class Jobs extends Model<Jobs, IJobsAttributes> {
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
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  tasks: string[];

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  postion: string;

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

export default Jobs;
