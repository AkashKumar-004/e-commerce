require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const DBCon = require("./CONFIG/db");
const router = require('./Routes/Productroute');
const cart=require("./Routes/cartroute");
app.use(express.json());
app.use(cors());

console.log('Starting server...');

DBCon()
  .then(() => {
    console.log("Database connected successfully");
    const port =7777;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });

app.use('/product',router)
app.use('/cart',cart);
app.get('/', (req, res) => {
  res.json({ message: "message" });
});
