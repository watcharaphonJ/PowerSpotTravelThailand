var fs = require('fs');
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'public/' })
var router = express.Router();

var Tour = require('../model/tour');

router.post('/:_id', upload.single('image'), (req, res, next) => {
    let _id = req.params._id;
    let query = { _id: _id };
    if (req.file.mimetype === "image/jpeg") {
        Tour.find(query, (err, record) => {
            if (err) {
                next(err);
            } else {
                if ( record ) {
                    fs.rename('public/' + req.file.filename, 'public/' + _id + ".jpg", (error) => {
                        if (error) next(err);
                        else res.json({ results: "Complete" });
                    });
                } else {
                    fs.unlinkSync('public/' + req.file.filename);
                    res.json({ results: "Error: _id not found."});
                }
            }
        });
    } else {
        fs.unlinkSync('public/' + req.file.filename);
        res.json({ results: "Error: Allow only image/jpeg" });
    }
});

module.exports = router;
