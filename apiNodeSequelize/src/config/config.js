const config = {
  development: {
    username: 'root',
    password: 'root',
    database: 'course',
    host: '127.0.0.1',
  },

  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },

  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

export default config;
