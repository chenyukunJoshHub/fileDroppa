'use strict';
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index', {title: 'Express'});
    });

    app.post('/upload', multipartMiddleware, (req, res) => {
        console.log(req.files);
        res.status(200).send('Files were uploaded successfully');
    })
};
