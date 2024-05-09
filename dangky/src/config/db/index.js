const mongoose = require('mongoose')
//const { ObjectId } = mongoose.Schema.Types
//Add url mongodb
async function connect() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully!!!')
    } catch (err) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect }
