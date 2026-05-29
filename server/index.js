require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const errorhandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const port = process.env.PORT || 3000;

//global middleware
app.use(express.json());

//security middleware
app.use(cors());
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
);

//mount routes

//error handling middlware
app.use(notFound);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}....`);
});
