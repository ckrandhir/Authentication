/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 13:35:36 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-21 16:46:35
 */
const { mongoose } = require('./../server/db/mongoose');

const { Todo } = require('./../server/models/todo');

const { User } = require('./../server/models/user');

const { ObjectID } = require('mongodb');

var id = '5ab2a1f41a06ad12b893824d';

var userId = '5ab2836c52bbe31a3425809d';


//Delete all
Todo.remove({}).then(() => {

    console.log();

});


//Find one and remove

//Find by Id and remove

Todo.findByIdAndRemove().then((todo) => {

    console.log(todo);

});


Todo.findOneAndRemove().then((todo) => {

    console.log(todo);

});