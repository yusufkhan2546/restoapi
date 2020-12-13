const express = require('express');

const app = express();

const morgan = require('morgan');

const cors = require('cors');

const bodyparser = require('body-parser');

const mongoose = require('mongoose');


const foodItemRoutes = require('./API/routes/fooditems');
const userRoutes = require('./API/routes/user');
const foodtypeRoutes = require('./API/routes/foodtypes');
const cartRoutes = require('./API/routes/cart')


mongoose.connect('mongodb+srv://yusufkhan2546:@likh@n@123$@nodetestcluster.qigkd.mongodb.net/NodeTestCluster?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

app.use('/foodtypes',foodtypeRoutes);
app.use('/fooditems', foodItemRoutes);
app.use('/users',userRoutes);
app.use('/cart',cartRoutes);


app.use((req,res,next)=>{
const error = new Error('Route Not Found');
error.status = 404;
next(error);
})

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
      error:{
          message:error.message
      }
  });
});
module.exports = app;