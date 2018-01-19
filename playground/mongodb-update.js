// const MongoClient = require('mongodb').MongoClient;
const{ MongoClient, ObjectID }=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to the MongoDB server.')
    }
    const db = client.db('TodoApp')
    console.log('connected to MongoDB server')

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a613ab3b3aa5d3cd3418cda')
      },{
        $set: {
            completed: true
      }},
      {
          returnOriginal: false
      }).then((result)=>{
          console.log(result);
      })
    //db.close();
});