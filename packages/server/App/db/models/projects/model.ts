import {
  Table,
  Model,
  Column,
  DataType,
  // HasOne,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Elements } from '../elements';

export interface IProjectsAttributes {
  name: string;
  description: string;
  tasks: string[];
  stack: string[];
  projectUrl: string;
  codeUrl: string;
  projectType: string;
  icon: string;
}

@Table({ tableName: 'projects', timestamps: false })
class Projects extends Model<Projects, IProjectsAttributes> {
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
  icon: string;

  @Column({
    type: DataType.TEXT('long'),
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  projectUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  codeUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  projectType: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  tasks: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  stack: string[];

  @ForeignKey(() => Elements)
  elementId: number;

  @BelongsTo(() => Elements)
  element: Elements;
}

export default Projects;
