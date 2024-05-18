const dotEnv = require("dotenv");


const configFile = `./.env.dev`
  dotEnv.config({ path: configFile })

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};