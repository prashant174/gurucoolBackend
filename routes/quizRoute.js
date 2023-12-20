const express=require("express")
const { authenticate } = require("../middleware/authenticate")
const { quizess, getActiveQuiz, getQuizById, getAllQuiz } = require("../controllers/quizController")
const quizRouter=express.Router()

quizRouter.post("/quizzes",authenticate,quizess)
quizRouter.get("/quizzes/active",authenticate,getActiveQuiz)
quizRouter.get("/quizzes/:id/result",authenticate,getQuizById)
quizRouter.get("/quizzes/all",authenticate,getAllQuiz)



module.exports={
    quizRouter
}