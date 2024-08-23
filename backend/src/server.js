const express = require('express');
const CONFIG = require("./Configurations/config");
const DBConnection= require('./Configurations/config.db');
const routes = require('./routes');

const app = express();

DBConnection();

routes(app);

app.listen(CONFIG.port, () => {
  console.log(`Server is running on http://localhost:${CONFIG.port}`);
});
