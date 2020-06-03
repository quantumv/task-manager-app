require('../src/db/mongoose')
const User = require('../src/models/user')

// This is async script
// User.findByIdAndUpdate('5ec0faf1f9ae5b4cdc9d835e', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// To use async await we must use it as a function
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5ec0faf1f9ae5b4cdc9d835e', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})