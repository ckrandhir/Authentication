/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-09 13:46:59 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-09 16:04:17
 */


//Oject destrcturing 
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID;

// console.log(obj);



//const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {

        return console.log('unable to connect');

    }
    //console.log('Connected to mongo server');

    const db = client.db('TodoApp');

    //delete Many



    // db.collection('Todos').deleteMany({ complete: false }).then((result) => {

    //     console.log(result);


    // })


    //deleteone



    // db.collection('Todos').deleteOne({ complete: false }).then((result) => {

    //     console.log(`Document deleted: ${result.result.n}`);


    // })

    //findOneDelete
    db.collection('Todos').findOneAndDelete({ complete: false }).then((result) => {

        // console.log(`Document deleted: ${result.result.n}`);

        console.log(`Deleted document value: ${JSON.stringify(result) }`);

        // console.log(`Deleted document value: ${JSON.stringify(result.value) }`);
        // console.log(`Number of  document deleted: ${JSON.stringify(result.lastErrorObject.n) }`);



    })




    client.close();
})