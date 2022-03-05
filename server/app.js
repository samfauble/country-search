const express = require('express');
const app = express();
const countryRouter = require('./routers/router');
const router = express.Router();
const port = 4000;

router.use('/country', countryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});