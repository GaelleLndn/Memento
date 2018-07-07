var express = require('express');
var router = express.Router();

var log_controller = require('../controllers/logController');

// GET home page.
router.get('/', log_controller.index);



// GET request for creating a Log. NOTE This must come before routes that display Log (uses id).
router.get('/log/create', log_controller.log_create_get);

// POST request for creating Log.
router.post('/log/create', log_controller.log_create_post);

// GET request to delete Log.
router.get('/log/:id/delete', log_controller.log_delete_get);

// POST request to delete Log.
router.post('/log/:id/delete', log_controller.log_delete_post);

// GET request to update Log.
router.get('/log/:id/update', log_controller.log_update_get);

// POST request to update Log.
router.post('/log/:id/update', log_controller.log_update_post);

// GET request for one Book.
router.get('/log/:id', log_controller.log_detail);

// GET request for list of all Book items.
router.get('/logs', log_controller.log_list);


module.exports = router;
