const mongoose = require('mongoose');
let connection = undefined;

const getConnection = async () => {
 if(connection) {
    console.log('db deja connecte')
    return connection;
 }
 else{
   connection = await mongoose.connect('mongodb+srv://amal:v6qMN8fGtYH4lUlZ@cluster0.9f6mqjx.mongodb.net/?retryWrites=true&w=majority')
   return connection;
 }

}
module.exports={getConnection,
  mongoose,
  Schema: mongoose.Schema,};