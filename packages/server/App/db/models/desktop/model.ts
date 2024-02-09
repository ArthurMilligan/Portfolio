import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Folders } from '../folders';
import { Elements } from '../elements';

export interface IDesktopAttributes {
  x: number;
  y: number;
}

@Table({ tableName: 'desktop', timestamps: false })
class Desktop extends Model<Desktop, IDesktopAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  x: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  y: number;

  @HasMany(() => Elements)
  Elements: Elements[];

  @HasMany(() => Folders)
  Folders: Folders[];
}

export default Desktop;
