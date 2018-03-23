/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 11:13:41 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-21 11:14:28
 */
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {

    mongoose: mongoose
};