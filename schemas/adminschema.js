const mongoose = require("mongoose");
const schema = mongoose.Schema;
const adminSchema = new schema({
    name : { type: String },
  username: { type: String },
  password: { type: String },
  
 
});



  

module.exports= mongoose.model("admins", adminSchema);