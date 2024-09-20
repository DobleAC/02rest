const express = require('express');
const bodyParser = require('body-parser');

const projectRouters = require('./routes/projectRoutes');

const app = express();

app.use('/projects',projectRouters);
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;