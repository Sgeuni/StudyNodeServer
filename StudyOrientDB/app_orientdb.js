var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },

    filename: function (req, file, cb) {
        cb(null, file.originalName);
    }
})

var upload = multer({storage: _storage})
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.locals.pretty = true;
app.use('/user', express.static('uploads'));
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/upload', function(req, res){
    res.render('upload');
});
app.post('/upload', upload.single('userfile'), function (req, res) {
   res.send('Uploaded : '+req.file.filename);
});
app.get('/topic/new', function(req,res) {

});