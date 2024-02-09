import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './App/routes';
import db from './App/db';

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

db.sequelize.sync().then(() => {
  console.log('Drop and re-sync db.');
});

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to bakirBack.' });
});

app.listen(Number(process.env.SERVER_PORT), () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}.`);
});
