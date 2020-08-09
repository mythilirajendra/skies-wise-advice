const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
let nodemailer = require('nodemailer');
let cron = require('node-cron');


/*router.get('/',(req,res,next)=>{
    res.send('login or register');
})*/

router.post('/register',(req,res,next)=>{
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location
    });
    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success: false, msg: 'Failed to add user'});
        }
        else{
            res.json({success: true, msg: 'added user'});
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'rajendra.mythili2017@vitstudent.ac.in',
                  pass: 'mythili2106'
                }
            });
            var mailOptions = {
                from: 'rajendra.mythili2017@vitstudent.ac.in',
                to: email,
                subject: 'Email from Node-App: A Test Message!',
                text: 'Some content to send'
            };
            cron.schedule('0 1 * * *', () => {
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                });
              }, {
                scheduled: true,
                timezone: "America/Sao_Paulo"
            });
        }
    })
    //res.send('thanks for reg.You will recieve mail alerts.go back to home+name on toolbar');
})

router.post('/login',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){return res.json({success:false, msg:'User not found with such username'})}
        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user,config.secret,{expiresIn: 300});
                res.json({success:true,token:'JWT '+token,user:{id:user._id,username:user.username,email:user.email,location:user.location}});
            }
            else{return res.json({success:false,msg:'Wrong Password'});}
        });
    });
});

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({user:req.user});
})
module.exports = router;