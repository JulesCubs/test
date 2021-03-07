const express = require('express');
const serial = require('../components/serial/network');

const routes = function (server) {
    server.use('/serial', serial);
}

module.exports = routes;