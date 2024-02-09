import { Sequelize } from 'sequelize-typescript';
import Models from './models';

const sequelize = new Sequelize({
  database: String(process.env.POSTGRES_DB),
  dialect: 'postgres',
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  host: String(process.env.POSTGRES_HOST),
  port: Number(process.env.POSTGRES_PORT),
});

sequelize.addModels(Models);

const db: Record<string, any> = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
