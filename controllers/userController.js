const bcrypt=require("bcrypt")
const { UserModel } = require("../models/userModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const signup=async(req,res)=>{
    try{
         const {name,email,password}=req.body

         const existinUser=await UserModel.findOne({email})

         if(existinUser){
            return res.status(200).send({msg:"User already exists"})
         }

         bcrypt.hash(password,6,async(err,hash)=>{

            if(err){
                return res.status(400).send({msg:"Someting went wrong please try again"})
            }

            const user = new UserModel({name,email,password:hash})

            await user.save()

            res.status(201).send({msg:"signup successfull"})

         })
         

        
    }catch(err){
        res.status(500).send({msg:"Something went wrong please try again "})
    }
}

const login=async(req,res)=>{
    try{
        const {email,password}=req.body

        const user=await UserModel.findOne({email})

        if(!user){
            return res.status(401).send({msg:"user not found please signin first"})
        }

        const isMatch=await bcrypt.compare(req.body.password,user.password)

        if(!isMatch){
            return res.status(200).send({msg:"Invalid credentials"})
        }

        const token=jwt.sign({name:user.name,email:user.email},process.env.SECRET_KEY,{expiresIn:"1d"})

        res.status(200).send({msg:"login successfull",token:token})

    }catch(err){
        res.status(500).send({msg:"Something went wrong please try again "})
    }
}

module.exports={
    signup,
    login
}