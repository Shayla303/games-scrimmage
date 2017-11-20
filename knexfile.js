var env = require('dotenv'). config()

module.exports = {

  development: {
    client: 'postgresql',
    connection:'postgresql://localhost/game_scrimmage'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
    },
};
