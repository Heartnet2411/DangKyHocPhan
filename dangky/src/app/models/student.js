const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')

const Student = new Schema({
    name: { type: String, maxLength: 255, required: true },
    studentId: { type: String, maxLength: 8, required: true },
    department: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 255 },
    phoneNumber: { type: String, maxLength: 255 },
    gender: { type: String, maxLength: 8 },
    GPA: { type: Number },
    totalCredit: { type: Number },
    password: { type: String, maxLength: 255, required: true },
})

// Add plugin
mongoose.plugin(slug)
Student.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('Student', Student)
