const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID;

// console.log(obj);



//const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {

        return console.log('unable to connect');

    }
    console.log('Connected to mongo server');

    const db = client.db('TodoApp');


    //Update in Todos collection

    // db.collection('Todos').findOneAndUpdate(


    //     { _id: new ObjectID('5aa1bdec9637a022a81e326c') },


    //     {
    //         $set: {
    //             complete: false
    //         }

    //     },

    //     {
    //         returnOriginal: false

    //     }

    // ).then((result) => {
    //     console.log(`Update document value: ${JSON.stringify(result.value)}`);


    // });



    //  5aa2bc3e34bcd232a0a1979e
    //Update in user collection

    // db.collection('User').findOneAndUpdate(


    //     { _id: new ObjectID('5aa2bc3e34bcd232a0a1979e') },


    //     {
    //         $set: {
    //             location: 'india'
    //         }

    //     },

    //     {
    //         returnOriginal: false

    //     }

    // ).then((result) => {
    //     console.log(`Update document value: ${JSON.stringify(result.value)}`);


    // });


    //Update in user collection

    db.collection('User').findOneAndUpdate(


        { _id: new ObjectID('5aa2bc3e34bcd232a0a1979e') },


        {
            $inc: {
                age: 10
            }

        },

        {
            returnOriginal: false

        }

    ).then((result) => {
        console.log(`Update document value: ${JSON.stringify(result.value)}`);


    });




    client.close();
})