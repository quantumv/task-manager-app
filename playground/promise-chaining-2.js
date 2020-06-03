require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ebf75c8963bbb22c0556ea9').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndUpdate(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5ebf75c8963bbb22c0556ea9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})