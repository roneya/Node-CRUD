const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/products", productRoute);

mongoose.connect('mongodb+srv://roneya:abc12345.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeDB')
.then(() => {
  console.log('Connected to the database!');
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
})
.catch((error) => {
  console.log('Connection failed!');
});
