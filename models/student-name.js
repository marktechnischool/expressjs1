const mongoose = require('mongoose');

const Student = mongoose.model('student', {
    name: {
        type: String,
        required: true
    }
});

module.exports = Student;