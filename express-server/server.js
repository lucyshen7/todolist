// load .env data into process.env
require('dotenv').config({
  path: '../.env'
});

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// Express Configuration
App.use(BodyParser.urlencoded({
  extended: false
}));
App.use(BodyParser.json());
App.use(Express.static('public'));

const todoRoutes = require("./routes/todos");
App.use("/", todoRoutes);

// Single-page application
App.get('/api/todos/test', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});