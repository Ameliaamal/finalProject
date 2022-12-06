const {getConnection, Schema, mongoose} = require('../db/mongoose')
getConnection();

const userSchema = new Schema({
    name:  String, 
    email: {
      type: String,
      required:  true,
    },
    pass1: String,
    aggreedToterms : Boolean,
    //city : String,
    //aboutyou: String,
    //upload: String,

  });

 const userModel = mongoose.model('Users',userSchema)

 module.exports={userModel};