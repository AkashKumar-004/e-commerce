const mongoose = require('mongoose');

const DBCon = async () => {
  try {
    await mongoose.connect("mongodb+srv://akash_2004:akash_2004@database.dmmxb.mongodb.net/?retryWrites=true&w=majority&appName=database")
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

module.exports = DBCon;
