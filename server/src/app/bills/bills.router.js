//imports
const router = require('express').Router();
const BillsCtrl = require('./bills.controller');

//routes
router.route('/')
.post(BillsCtrl.createBills)
.get(BillsCtrl.viewBills)

router.route('/:id')
.get(BillsCtrl.viewBill)
.put(BillsCtrl.updateBill)
.delete(BillsCtrl.deleteBill);

//exports
module.exports = router;