const mongoose = require("mongoose");

function connectDb() {
  const mongoURL = `mongodb://${process.env.MONGODB_URL}?authSource=${process.env.MONGODB_AUTHSOURCE}`

    mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }).then(() => console.log('Connected Database'),
    (err) => {
      throw err;
    },);
    console.log("Mongodb connected");

}

module.exports = connectDb;
