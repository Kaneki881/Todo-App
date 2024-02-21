
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
/*const creatUser = async (req,res)=>{
    const  Data=req.body;
    console.log(Data);
     //await User.create(user);
   // res.send(user);
   
    res.json({message:"user has been created successfull"});
}*/
/*const creatUser = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        const user = await User.create({ username, password });
        res.json({ message: "Your Account Created!" });
    } catch (err) {
        res.json({ message: err.message });
    }
};*/
const creatUser = async (req, res) => {
    try {
      console.log('Request body:', req.body); // Log entire request body
  
      if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Missing username or password' });
      }
  
      const { username, password } = req.body;
  
      // Hash password before saving (recommended):
      const hashedPassword = await bcrypt.hash(password, 10); // Adjust salt rounds as needed
  
      const user = await User.create({ username, password: hashedPassword });
  
      res.json({ message: 'User created successfully!', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
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