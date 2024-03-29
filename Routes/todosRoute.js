const express = require('express');
const router = express.Router();
const functionTodo = require('../Controllers/todosController.js');
const { login } = require("../Controllers/usersController.js");

router.post('/login',login);
router.get('/',functionTodo.getTodos);
router.post('/',functionTodo.creatTodo);
router.get('/:id',functionTodo.getTodo);
router.put('/:id',functionTodo.updateTodo);
router.delete('/:id',functionTodo.deleteTodo);




module.exports = router;