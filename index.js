const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');

dotenv.config();
const port = process.env.PORT;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
