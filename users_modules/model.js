const {getConnection, Schema, mongoose} = require('../db/mongoose')
getConnection();

const userSchema = new Schema({
    name:  String, 
    email: {
      type: String,
      required:  true,
    },
    password: String,
    aggreedToterms : Boolean,
    city : String,
    aboutyou: String,
    upload: String,

  });

 const userModel = mongoose.model('users',userSchema)

 exports.model=userModel;