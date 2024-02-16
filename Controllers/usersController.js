
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const login = async (req,res)=>{
    const { username, password } = req.body;
    try{
     const user = await User.findOne({ username });
     const pass = await bcrypt.compare(password, User.password);
    if(!user || !pass ){
        return res.status(401)
                   .json({message:"Incorrect username or password"})
    }
        // const token = jwt.sign({ username }, process.env.SECRET);
        const token = jwt.sign({ username }, "amine2024");
      // amine => 
        res.header("Autorization","Bearer " + token);
    }catch(err){
        res.status(500)
        .json({message:" Oops!! Incorrect username or password"});
        
    }

}

const getUsers = async (req,res)=>{
    const users = await User.find({});
    res.send(users);
};
const creatUser = async (req,res)=>{
    const user = await User.create();
    res.send(user);
    res.json({message:"user has been created successfull"});
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