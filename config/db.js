import { Sequelize } from "sequelize";
import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';
import { Readable } from 'stream';

const storage = new Storage();
const bucketName = 'projek_tcc';
const fileName = '/.env';

async function loadEnvFromBucket() {
  const file = storage.bucket(bucketName).file(fileName);
  const contents = await file.download();
  const envStream = Readable.from(contents[0].toString());
  dotenv.parse(envStream);
}

await loadEnvFromBucket();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

export default sequelize;
