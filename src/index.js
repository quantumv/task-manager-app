const express = require('express')
const file = require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('user')
//     const user = new User(req.body)

//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//     res.status(400).send(e)
//     })
})

app.post('/tasks', (req, res) => {
    console.log(req.body)
    res.send('task')
    // const task = new Task(req.body)
    
//     task.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//     res.status(400).send(e)
//     })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})