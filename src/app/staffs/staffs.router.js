const StaffsCtrl = require('./staffs.controller');

//imports
const router = require('express').Router();

//routes
router.route('/')
.post(StaffsCtrl.createStaffs)
.get(StaffsCtrl.viewStaffs)

router.route('/:id')
.get(StaffsCtrl.viewStaff)
.put(StaffsCtrl.updateStaff)
.delete(StaffsCtrl.deleteStaff);

//exports
module.exports = router;