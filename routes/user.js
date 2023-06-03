const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const dishController = require('../controllers/dish');

const router = express.Router();

// định nghĩa route xử lý
router.get('/comment', userController.getComment);

router.get('/liked-dish', userController.getLikedDish);

router.post('/liked-dish', userController.postLikedDish);

router.get('/shared-dish', userController.getSharedDish);

router.get('/profile', userController.getProfile);

router.get('/add-dish', dishController.getAddDish);

router.post('/add-dish', dishController.postAddDish);

router.get('/edit-dish/:dishId', dishController.getEditDish);

module.exports = router;
