/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 13:35:36 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-21 14:04:33
 */
const { mongoose } = require('./../server/db/mongoose');

const { Todo } = require('./../server/models/todo');

const { User } = require('./../server/models/user');

const { ObjectID } = require('mongodb');

var id = '5ab2a1f41a06ad12b893824d';

var userId = '5ab2836c52bbe31a3425809d';

//Id validation

// if (!ObjectID.isValid(id)) {

//     console.log('ID is not valid');

// } else {

//     console.log('ID is valid');

// }
// Todo.find({
//     _id: id
// }).then((doc) => {

//     console.log(doc);

// }, (err) => {


// });



//find one
// Todo.findOne({
//     _id: id
// }).then((doc) => {

//     console.log(doc);

// }, (err) => {


// });

//By ID
// Todo.findById({
//     _id: id
// }).then((doc) => {

//     if (!doc) {

//         return console.log('Id not found');

//     }
//     console.log(doc);

// }, (err) => {

//     console.log('Error' + err);


// });


User.findById(userId).then((doc) => {
    if (!doc) {
        console.log(doc);
    }

}).catch((err) => {

    console.log('Error :-' + err);

});