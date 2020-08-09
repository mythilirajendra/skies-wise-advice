const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');


const config = require('./config/database');
mongoose.connect(config.database, {
    useNewUrlParser: true
  },  (err) => {
    if (err) {
      console.log('Not connected to the database: ' + err); // Log to console if unable to connect to database
    } else {
      console.log('Successfully connected to MongoDB'); // Log to console if able to connect to database
    }
  });
mongoose.connection.on('connected',()=>{
    console.log('Connected to db:'+config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('error in db conn:'+err);
})

const app = express();
const users = require('./routes/users');
const port = 3000;
app.use(express.static(path.join(__dirname + "public")));

app.use(cors());
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use('/users',users);

/*app.get('/', (req,res,next)=>{
    res.send('welcome, click here to login/reg for alerts, click here to check weather');
});*/
app.use(express.static('public'));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen(port, ()=>{
    console.log('Server started on port:'+port);
});