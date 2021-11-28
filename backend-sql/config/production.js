module.exports = {
  env: 'production',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: 'kornel1991',
    database: 'postgres',
    host: 'postgres',
    logging: console.log,
    operatorsAliases: false,
  },

  // database: {
  //   username: 'root',
  //   dialect: 'mysql',
  //   password: '',
  //   database: 'production',
  //   host:
  //     '<insert public ip here>',
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

  graphiql: false,

  clientUrl:
    '<insert client url here>',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: '7f84db2f-3138-4fb9-8870-158a2d99c56a',
};
