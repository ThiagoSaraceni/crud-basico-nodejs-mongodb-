const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@diniz.surifho.mongodb.net/database?retryWrites=true&w=majority&appName=diniz`
    );
    console.log("conexao efetuada com sucesso!");
  } catch (error) {
    console.log("erro", errror);
  }
};

module.exports = connectToDatabase;
