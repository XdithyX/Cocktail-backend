const mongoose = require("mongoose");
const schema = mongoose.Schema;
const adminloginSchema = new schema({
  username: { type: String },
  password: { type: String },
 
});



  

module.exports= mongoose.model("adminlogins", adminloginSchema);