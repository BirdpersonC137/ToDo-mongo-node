// const MongoClient = require('mongodb').MongoClient;
const{ MongoClient, ObjectID }=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to the MongoDB server.')
    }
    const db = client.db('TodoApp')
    console.log('connected to MongoDB server')

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result)
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result)
    // })
    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result)
    // })
    // client.close();s
    // db.collection('Users').deleteMany({name: 'Vlad'}).then((result)=>{
    //     console.log(result)
    // })
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a6131c2bf4abd86cccd4601')}).then((result)=>{
        console.log(JSON.stringify(result,undefined, 2))
    })
});