const express = require('express');

const projectRouters = require('./routes/projectRoutes');

const app = express();

app.use('/project',projectRouters);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;