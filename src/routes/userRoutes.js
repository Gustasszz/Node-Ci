const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', authController.login);

router.post('/', userController.create);
router.get('/', authMiddleware, userController.getAll);

router.get('/usuario/:username', authMiddleware, userController.getByUsername);
router.get('/email/:email', authMiddleware, userController.getByEmail);

router.get('/:id', authMiddleware, userController.getById);
router.delete('/:id', authMiddleware, userController.remove);

module.exports = router;
