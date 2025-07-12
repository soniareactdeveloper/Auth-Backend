require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConfig = require('./config/db');
const router = require('./routes');

const app = express();


app.use(cors({ 
  origin: 'http://localhost:5173',
  credentials: true              
}));

app.get("/", (req, res) => {
  res.send("Auth Backend API is running ✅");
});


app.use(express.json());


app.use(router);


dbConfig();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
