var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', { useMongoClient: true });
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
    name: String,
    pwd: Number,
    createtime:{
        default:new Date(),
        type:Date
    }
});

var user = mongoose.model('User', userSchema);

module.exports=user;