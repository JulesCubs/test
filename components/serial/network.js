const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/', function (req, res){

    controller.postSerial(req.query)
    .then ((fullMsg) => {
        response.success(req, res, fullMsg, 200);
    })
    .catch (() => {
        response.error(req, res, "Error", 400);
    })
});

module.exports = router;