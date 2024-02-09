import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Profile } from '../profile';
import { Folders } from '../folders';
import { Desktop } from '../desktop';

export interface IElementsAttributes {
  type: string;
  icon: string;
  name: string;
}

@Table({ tableName: 'elements', timestamps: false })
class Elements extends Model<Elements, IElementsAttributes> {
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
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  icon: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @HasMany(() => Profile)
  Profiles: Profile[];

  @ForeignKey(() => Folders)
  folderId: number;

  @BelongsTo(() => Folders)
  Folder: Folders;

  @ForeignKey(() => Desktop)
  desktopId: number;

  @BelongsTo(() => Desktop)
  desktop: Desktop;
}

export default Elements;
