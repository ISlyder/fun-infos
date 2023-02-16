const express = require('express');
const router = express.Router();
const infoController = require('../controllers/informations');
const status = require('../core/api-code');

router.get('/', async (req, res, next) => {
    const nbInfoNeeded = req.query.limit || 10;
    infoController.getLastInfos(nbInfoNeeded, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.json(data).status(status.OK);
        }
    });
});

module.exports = router
