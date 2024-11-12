const mongoose = require('mongoose');
const mongoURI= 'mongodb://0.0.0.0:27017/todo'

const connectToMongo =()=> mongoose.connect(mongoURI).then(()=>
console.log("Database is connected BOSS"));

module.exports=connectToMongo;