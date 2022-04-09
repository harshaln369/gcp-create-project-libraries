const express = require('express');
require('dotenv').config();

const { callCreateProject } = require('./helpers/create-project');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await callCreateProject();
    res.send({ message: 'project created', data: response });
  } catch (err) {
    console.log('error ====> ', err);
    res.send({ message: 'error occured' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
