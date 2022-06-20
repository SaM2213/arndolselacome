const { Sequelize } = require('sequelize');
const { setupModels } = require('../db/modelos');

const user = 'postgres';
const host = 'localhost';
const port = 1024;
const password = 'Loki123a';
const database = 's001';

const USUARIO = encodeURIComponent(user);
const PASSWORD = encodeURIComponent(password);

const URI = `postgres://${USUARIO}:${PASSWORD}@${host}:${port}/${database}`;

const sequelize = new Sequelize (URI, {
  dialect : 'postgres',
  logging : console.log
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
