const mongoose=require("mongoose")

const quizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    rightAnswer: Number,
    startDate: Date,
    endDate: Date,
  });
  
  const Quiz = mongoose.model('Quiz', quizSchema);

  module.exports={
    Quiz
  }