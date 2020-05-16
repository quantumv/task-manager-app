// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to database!')
    }
    // In this example we are going to remove users. I a will delete users older then 40 years age.
    const db = client.db(databaseName)
// Santa age 130 was removed
    // db.collection('users').deleteMany({
    //     age: 130
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    db.collection('tasks').deleteOne({
       description: "Wash the car"
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })    
})