const { Sequelize, DataTypes, Model } = require("sequelize");
const sqlite3 =require('sqlite3')
const path=require("path");


//postgresql数据库
const sequelize = new Sequelize({
  dialect: "postgres",
  host: 'localhost',
  port:5433,
  password:"postgres",
  username:"postgres",
  database:"bim2",
  schema:"public"
});


//sqlite数据库
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./db/test.sqlite",
//   dialectModule: sqlite3,
// });

module.exports = sequelize;
