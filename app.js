const bodyParser = require('body-parser');
const express = require("express");
const apiV1Router = require('./routes/apiV1Router');


const app = express();
const port = 3000;

app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

apiV1Router(app);
