const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            maxPoolSize: 50, 
            wtimeoutMS: 2500,
            useNewUrlParser: true

        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;