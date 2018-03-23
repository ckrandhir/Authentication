/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 11:17:30 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-21 11:24:33
 */


var mongoose = require('mongoose');


var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }

});

module.exports = {

    User: User
};