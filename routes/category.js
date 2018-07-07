const express = require('express');
const router = express.Router();

// // declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';


var category_controller = require('../controllers/categoryController');

// GET request for creating a category. NOTE This must come before route that displays category (uses id).
router.get('/category/create', category_controller.category_create_get);

//POST request for creating category.
router.post('/category/create', category_controller.category_create_post);

// GET request to delete category.
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete category.
router.post('/category/:id/delete', category_controller.category_delete_post);

// GET request to update category.
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update category.
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for one Genre.
router.get('/category/:id', category_controller.category_detail);

// GET request for list of all Genre.
router.get('/categories', category_controller.category_list);


module.exports = router;