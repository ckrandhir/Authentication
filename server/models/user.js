/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 11:17:30 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-04-03 10:45:22
 */


var mongoose = require('mongoose');

const validator = require('validator');
const jwt = require('jsonwebtoken');


var UserScheme = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1,
        unique: true,


        validate: {
            validator: validator.isEmail,
            message: 'This not valid email Id'
        }

        // validate: {
        //     // validator: (value) => {
        //     //     return validator.isEmail(value);
        //     // },
        //     message: 'This not valid email Id'

        // },
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },


    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }

    }]

});

UserScheme.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';

    var token = jwt.sign({ _id: user._id.toHexString, access }, 'abc123')

    user.token.push.concat([{ access, token }]);

    user.save().then(() => {

        return token;
    })



};


var User = mongoose.model('User', UserScheme);

module.exports = {

    User: User
};