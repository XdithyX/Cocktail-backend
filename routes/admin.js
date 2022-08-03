var express = require('express');
var router = express.Router();
var adminlogins = require('../schemas/schema')
var asyncHandler = require('express-async-handler')
var admins = require('../schemas/adminschema')

const addadmin= asyncHandler( async(req,res)=>{
    const { name,username , password}= req.body

   if(!username || ! password)
   {
    res.status(400)
    throw new Error('please add all field');
   } 
  
   const userExist= await admins.findOne({username})
   if(userExist){
    res.status(400)
    throw new Error('user exists');
   } 

   else{//
    const admin= await admins.create({
        name, username, password
    })
    if(admin){
        res.status(201).json({
            _id: admin.id,
            name: admin.name,
            username: admin.username
        })
    
    
   }else{
    res.status(400);
    throw new Error('Invalid user data')
   }}

})


router.post('/add-admins', addadmin)

router.post('/validate', (req,res)=>{
  console.log(req.body);
  console.log("hello");
   const {
    username,
    password
  }= req.body
  
  try{
  adminlogins.create({username,password},(err,doc)=>{
    if(err)
    console.log(err);
  });
  }catch(e){
    console.log(e);
  }
  
  

});

module.exports = router