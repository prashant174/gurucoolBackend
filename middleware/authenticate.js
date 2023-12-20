const jwt=require("jsonwebtoken")
require("dotenv").config()


const authenticate=async(req,res,next)=>{
    try{
        const token =req.headers?.authorization?.split(" ")[1]

        if(!token){
            return res.status(401).send({msg:"Login first"})
        }

        const decoded=jwt.verify(token,process.env.SECRET_KEY)

        if(!decoded){
            return req.status(401).send({msg:"not authorized please login first"})
        }

        next()

    }catch(err){
        res.status(401).send({msg:"Something went wrong please try again"})
    }
}

module.exports={
    authenticate
}