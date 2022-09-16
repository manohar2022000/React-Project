//js
const express = require('express');
const { indexView, lfView, spView, aptbView, appaymentView ,newView} = require('../controllers/indexController');
const router = express.Router();
router.get('/', indexView);
router.get('/lf', lfView);
router.get('/sp', spView);
router.get('/aptb', aptbView);
router.get('/appayment', appaymentView);

router.get('/new',newView);


router.use("/universalcheck",require('../models/search'));
router.use("/portal",require('../models/portal'));

module.exports = router;