const express = require('express');
const router = express.Router();
const functionUser =require('../Controllers/usersController');
const auth = require('../midlewares/authMiddleware');


router.post('/login',auth,functionUser.login);
router.get('/',functionUser.getUsers);
router.post('/',functionUser.creatUser);
router.get('/:id',functionUser.getUser);
router.put('/:id',functionUser.updateUser);
router.delete('/:id',functionUser.deleteUser);

module.exports = router;

