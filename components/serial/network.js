const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res){

    controller.getSerial(req.query)
    .then ((fullMsg) => {
        response.success(req, res, fullMsg, 200);
    })
    .catch (() => {
        response.success(req, res, "Error", 400);
    })
});

module.exports = router;