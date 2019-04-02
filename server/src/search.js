var express = require('express');
var router = express.Router();
var Tour = require('../model/tour');

const params = [
    "title",
    "type",
    "region",
    "province",
    "cost",
    "date"
];

router.get('/', (req, res, next) => {
    let query = {};
    for (q in req.query) {
        if (params.includes(q)) {
            if (q === "title") {
                query["title"] = { $regex : ".*" + req.query[q] + ".*" };
            } else if (q === "type") {
                var type = req.query[q].split(",").filter(n => n);
                query["type"] = { $in: type }
            } else if (q === "cost") {
                var cost = req.query[q].split(",");
                query["cost"] = {
                    $gte: cost[0],
                    $lte: cost[1]
                }
            } else if (q === "date") {
                var date = req.query[q].split(",");
                query["date"] = {
                    $gte: new Date(date[0]).toISOString(),
                    $lt: new Date(date[1]).toISOString()
                }
            } else {
                query[q] = req.query[q];
            }
        }
    }
    Tour.find(query, (err, record) => {
        if (err) next(err);
        else res.json({ results: record });
    });
});

module.exports = router;