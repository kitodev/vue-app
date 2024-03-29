const os = require('os');

module.exports = {
  env: 'localhost',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: 'kornel1991',
    database: 'development',
    host: 'localhost',
    logging: console.log,
    operatorsAliases: false,
  },

  // database: {
  //   username: 'root',
  //   dialect: 'mysql',
  //   password: '',
  //   database: 'development',
  //   host: 'localhost',
  //   logging: console.log,
  //   operatorsAliases: false,
  // },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: true,

  clientUrl: 'https://localhost:8081',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: '7f84db2f-3138-4fb9-8870-158a2d99c56a',
};
