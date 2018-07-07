var Log = require('../models/log');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all logs.
exports.log_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Log list');
};

// Display detail page for a specific log.
exports.log_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Log detail: ' + req.params.id);
};

// Display log create form on GET.
exports.log_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Log create GET');
};

// Handle log create on POST.
exports.log_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Log create POST');
};

// Display log delete form on GET.
exports.log_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Log delete GET');
};

// Handle log delete on POST.
exports.log_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Log delete POST');
};

// Display log update form on GET.
exports.log_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Log update GET');
};

// Handle log update on POST.
exports.log_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Log update POST');
};
