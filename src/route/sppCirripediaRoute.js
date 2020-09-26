const express = require('express');
const router = express.Router();
const controller = require('../controller/sppCirripediaController')

router.get("/", controller.getAll);
router.get("/sppCirripedia", controller.getAll);

module.exports = router;