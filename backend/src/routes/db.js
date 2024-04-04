const mongoose = require('mongoose');

/* Database Connection */
const connectdb = async () => {
    try {
        mongoose.set('strictQuery', false)
        const connection = await mongoose.connect('mongodb://localhost:27017/blogDb')
        console.log('DataBase Connected')

    }catch (error) {
        console.log(error)
    }
}

module.exports = connectdb;