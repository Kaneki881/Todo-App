const Todo = require('../model/todoModel');


const getTodos = async (req,res)=>{
    try{
    const todos = await Todo.find();
    res.send(todos);
}catch(err){
    console.log("err in get todo");
    res.status(500).json({ message: "there's no todos yet!" });
}
};
const creatTodo = async (req,res)=>{
try{
  const { title, description, completed } = req.body; 
  const newTodo = await Todo.create({ title, description, completed });
  res.send(newTodo);
  res.json({message:"todo creating success"})
} catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating todo' });
  }
};
const getTodo= async (req,res)=>{
    try{
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.send(todo);
      }catch (error) {
        console.log("err in get todo");
        res.status(500).json({ message: error.message });
    }
}
const updateTodo = async (req,res)=>{
    try{
    const id = req.params.id;
    const todo = await Todo.findByIdAndUpdate(id);
    res.send(todo);
}catch (err){
    res.status(500).json({message:"Todo not found"})
}
}
const deleteTodo = async (req,res)=>{
    try{
    const id = req.params.id;
    const todo = await Todo.findByIdAndDelete(id);
    res.send(todo);
}catch(err){
    console.log("err in get todo");
    res.status(500).json({ message: err.message });
}
}
module.exports = {
    getTodo,getTodos,creatTodo,updateTodo,deleteTodo
};