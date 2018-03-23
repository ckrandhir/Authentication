/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 11:07:43 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-23 11:24:52
 */
var { mongoose } = require('./db/mongoose');

var { User } = require('./models/user');

var { Todo } = require('./models/todo');

var express = require('express');

var bodyParser = require('body-parser');

const { ObjectID } = require('mongodb');

const _ = require('lodash');

var id = '6ab2a1f41a06ad12b893824d';


var app = express();


//middleware
app.use(bodyParser.json());

// post
app.post('/todos', (req, res) => {

    console.log(req.body);

    var todo = new Todo({

        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {

        res.status(400).send(e);
    })


});


//get

app.get('/todos', (req, res) => {

    Todo.find().then((doc) => {
        res.send(doc);


    }, (err) => {


        res.status(404).send(e);
        console.log('unable to find');

    })

});



app.delete('/todos/:id', (req, res) => {
    // console.log('ID :-' + req.params.id);

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {

        return res.send({
            error: 'NotValid'
        });
    };


    Todo.findByIdAndRemove(id).then((doc) => {

        if (!doc) {

            return res.send({

                error: 'Id not found'
            });
        } else {
            res.send(doc);
        }

    }).catch(() => {




        res.send({


            error: 'Error in processing'
        });

    })



}, (e) => {

    console.log('Error');


});


//Get/todos/12345567

app.get('/todos/:id', (req, res) => {
    // console.log('ID :-' + req.params.id);

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {

        return res.send({
            error: 'NotValid'
        });
    };


    Todo.findById(id).then((doc) => {

        if (!doc) {

            return res.send({

                error: 'Id not found'
            });
        } else {
            res.send(doc);
        }

    }).catch(() => {




        res.send({


            error: 'Error in processing'
        });

    })



}, (e) => {

    console.log('Error');


});


//update

app.patch('/todos/:id', (req, res) => {

    var id = req.params.id;


    var body = _.pick(req.body, ['text', 'completed'])


    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getDate();
        console.log(body.completed);
        console.log(body.completedAt);


    } else {
        body.completed = false;
        body.completedAt = null;
        console.log('Hi');

    }
    console.log(body);

    Todo.findOneAndUpdate(id, { $set: body }, { new: true }).then((todo) => {

        if (!todo) {
            res.status(404).send();
        }
        res.status(400).send({ todo });
    }).catch((e) => {
        res.status(404).send();

    })
});




app.listen(3000, () => {

    console.log('Server start at 3000');

});


//Inserting document in collection using Mongoose

// var newTodo = new Todo({
//     text: 'Cooked dinner'

// });

// newTodo.save().then((doc) => {
//     console.log('Saved doc' + doc);

// }, (e) => {

//     console.log('Unable to save document');

// });

// var d = new Date();
// var newTodo1 = new Todo({
//     text: 'Chandan',
//     completed: true,
//     completeAt: d.getDate()

// });


// var d = new Date();
// var newTodo1 = new Todo({

// });

// newTodo1.save().then((doc) => {
//     console.log('Saved document' + doc);

// }, (e) => {

//     console.log('Unable to save');

// });






// userNew.save().then((doc) => {
//     console.log('Document saved successfully' + doc);

// }, (e) => {

//     console.log('Error in saving document');

// });