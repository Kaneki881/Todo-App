
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const login = async (req,res)=>{
    const data = req.body;
    try{
     const user = await User.findOne({username : data.username});
     const pass = await bcrypt.compare(data.password,user.password);
    if(!user || !pass ){
        return res.status(401)
                   .json({message:"Incorrect username or password"})
    }
        const token = jwt.sign({username : data.username},process.env.SECRET);
        res.header("Autorization","bearer "+token);
    }catch(err){
        res.status(500)
        .json({message:" Oops!! Incorrect username or password"})
    }

}

const getUsers = async (req,res)=>{
    const users = await User.find();
    res.send(users);
};
const creatUser = async (req,res)=>{
    const user = await User.create();
    res.send(user);
}
const getUser= async (req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user);
}
const updateUser = async (req,res)=>{
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id);
    res.send(user);
}
const deleteUser = async (req,res)=>{
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.send(user);
}
module.exports = {
    login,getUser,getUsers,creatUser,updateUser,deleteUser
};