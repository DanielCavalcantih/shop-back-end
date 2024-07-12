require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';

const options = {
  host: process.env.MYSQL_HOST || 'shop-database.ct664mio6cyp.us-east-1.rds.amazonaws.com',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DB_NAME || 'shop-database',
  username: process.env.MYSQL_USER || 'admin',
  password: process.env.MYSQL_PASSWORD || 'Jato1234',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
