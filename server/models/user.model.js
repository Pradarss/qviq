const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
})

userSchema.plugin(passportLocalMongoose);

User = mongoose.model('User',userSchema);

module.exports = User;