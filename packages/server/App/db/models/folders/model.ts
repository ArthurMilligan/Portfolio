import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Desktop } from '../desktop';
import { Elements } from '../elements';

export interface IFoldersAttributes {
  name: string;
  parentId: number;
}

@Table({ tableName: 'folders', timestamps: false })
class Folders extends Model<Folders, IFoldersAttributes> {
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
    type: DataType.INTEGER,
    allowNull: true,
  })
  parentId: number;

  @HasMany(() => Elements, 'folderId')
  element: Elements[];

  @ForeignKey(() => Desktop)
  desktopId: number;

  @BelongsTo(() => Desktop)
  desktop: Desktop;
}

export default Folders;
