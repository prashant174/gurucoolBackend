const { Quiz } = require("../models/quizModel");


const quizess=async(req,res)=>{
    try{
        const quizData = req.body;
        const quiz = new Quiz(quizData);
       await quiz.save()
        res.status(201).send({msg:"Quizz created successfully"})
    }catch(err){
        res.status(500).send({msg:"Something went wrong please try again "})
    }
}

const getActiveQuiz=async(req,res)=>{
    try{
        
        const todayDate = new Date();
        const activeQuiz = await Quiz.findOne({ startDate: { $lte: todayDate }, endDate: { $gte: todayDate } })
        res.status(200).send({msg:"Active Quiz fetched successfully",activeQuiz:activeQuiz})

    }catch(err){
        res.status(500).send({msg:"something went wrong please try again"})
    }
}

const getQuizById=async(req,res)=>{
    try{
        const quizId = req.params.id
        const quiz=await Quiz.findById(quizId)

        if(!quiz){
            return res.status(404).send({msg:"No quiz found bu this id please use other QuizId"})
        }

        const currentDate=new Date()
        if(currentDate<quiz.endDate.getTime() +5 * 60 * 1000){
            return res.status(400).send({msg:"No quiz available yet"})
        }

        res.status(200).send({msg:"quiz details by Id fetched successfully",quiz:quiz,correctAnswer:quiz.rightAnswer})

    }catch(err){
        res.status(500).send({msg:"something went wrong please try again"})
    }
}

const getAllQuiz=async(req,res)=>{
    try{

        const allQuizz=await Quiz.find()

        if(!allQuizz){
            return res.status(400).send({msg:"No quizz found"})
        }

        res.status(200).send({msg:"All quizzes fetch successfully",allQuizz:allQuizz})

    }catch(err){
        res.status(500).send({msg:"something went wrong please try again"})
    }
}

module.exports={
    quizess,
    getActiveQuiz,
    getQuizById,
    getAllQuiz
}