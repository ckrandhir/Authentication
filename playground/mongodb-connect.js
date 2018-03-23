/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-08 16:12:38 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-22 10:27:07
 * 
 * 
 */

//Oject destrcturing 
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID;

console.log(obj);



//const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {

        return console.log('unable to connect');

    }
    console.log('Connected to mongo server');

    const db = client.db('TodoApp');

    console.log('hi');


    db.collection('todos').insertOne({
        text: 'I am Randhir kumar',
        complete: true

    }, (err, result) => {

        if (err) {

            console.log('Unable to insert');

        }

        console.log(JSON.stringify(result.ops, undefined, 2));

    });


    //********************insert user Document in User collection****************************************** */

    //     db.collection('User').insertOne({

    //         name: 'Chandan',
    //         age: 30,
    //         location: 'Kansas'

    //     }, (err, result) => {

    //         if (err) {

    //             console.log('Unable to insert');

    //         }

    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));  //***** To print timestamp

    //     });








    client.close();
})