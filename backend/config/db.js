const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const colors = require("colors");

const connectDB = async () => {
  try {
    // Connect to MongoDB using Mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });

    // Output a success message upon successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // Output an error message and exit the process with a non-zero status code
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
