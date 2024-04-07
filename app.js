const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const userRoute = require('./routes/user.route.js');
const cookieParser = require('cookie-parser');
const middleware = require('./middleware/auth.middleware.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/products", middleware.restrict, productRoute);
app.use("/api/users", userRoute);

//pw = X6vp-JrByFUmQqk
mongoose.connect('mongodb+srv://roneya:abc@nodedb.zfkgyv6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeDB')
.then(() => {
  console.log('Connected to the database!');
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
})
.catch((error) => {
  console.log('Connection failed!');
});