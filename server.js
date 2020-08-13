const express = require('express');
const app = express();
const connectDb = require('./config/db');

//connect to the server
connectDb();

app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));