const express=require("express");
const rateLimit=require("express-rate-limit")
const cron = require('node-cron')
const { connection } = require("./config/db");
const { userRouter } = require("./routes/userroute");
const { quizRouter } = require("./routes/quizRoute");
const { Quiz } = require("./models/quizModel");
const app=express()
require("dotenv").config()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>Gurucool Backend</h1>")
})

const limiter=rateLimit({
  windowMs:15*60*1000,
  max:20
})


app.use(limiter)
cron.schedule('* * * * *', () => {
  Quiz.updateMany(
    { endDate: { $lt: new Date() } },
    { $set: { status: 'finished' } },
    (err, result) => {
      if (err) console.error(err);
      console.log('Quiz status updated:', result.nModified, 'quizzes');
    }
  );
});
app.use("/user",userRouter)
app.use("/",quizRouter)

const port =process.env.PORT||8080
app.listen(port,async()=>{
    try{
       await connection
       console.log('db connected')
    }catch(err){
        console.log(err)
    }
    console.log(`server running on port ${port}`)
})
