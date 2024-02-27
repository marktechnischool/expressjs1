const connectToDatabase = () => {
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGO_DB);
}

module.exports = connectToDatabase