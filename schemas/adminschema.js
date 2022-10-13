const mongoose = require("mongoose");
const schema = mongoose.Schema;
const adminSchema = new schema({
    name : { type: String },
  username: { type: String },
  password: { type: String },
  
 
});



  
//creating schema and exporting it
module.exports= mongoose.model("admins", adminSchema);
