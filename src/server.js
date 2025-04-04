import express from "express";
import { sequelize, models } from './models/index.js';
import seedDatabase from './config/database-seed.js';

const app = express();


sequelize.sync({ force: true, alter: true }).then(async () => {
  console.log('Tabelas sincronizadas com sucesso!');
  

  await insertData();
}).catch((error) => {
  console.error('Erro ao sincronizar tabelas:', error);
});


const insertData = async () => {
  try {

    await seedDatabase();
    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
  }
};


app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
