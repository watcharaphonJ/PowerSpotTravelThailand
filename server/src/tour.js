var express = require('express');
var router = express.Router();
var Tour = require('../model/tour');

router.post('/', (req, res, next) => {
    let tour = new Tour(req.body);
    tour.save(function(err) {
        if (err) next(err);
        else res.json({ results: "Complete" });
    });
});

router.get('/', (req, res, next) => {
    let query = {};
    Tour.find(query, (err, record) => {
        if (err) next(err);
        else res.json({ results: record });
    });
});

router.get('/:_id', (req, res, next) => {
    let query = { _id: req.params._id };
    Tour.findOne(query, (err, record) => {
        if (err) next(err);
        else res.json({ results: record });
    });
});

router.delete('/:_id', (req, res, next) => {
    let query = { _id: req.params._id };
    Tour.remove(query, (err) => {
        if (err) next(err);
        else res.json({ results: "Complete" });
    });
});

module.exports = router;
