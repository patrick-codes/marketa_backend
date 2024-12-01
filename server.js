require('dotenv').config();
const express = require("express");
const appRouter = require("./routes/auth_routes");
const {dbconfig} = require('./dbconfig/db_config');
const app = express();

dbconfig();


app.use(express.json());
app.use('/marketa/api/',appRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} `);
});
