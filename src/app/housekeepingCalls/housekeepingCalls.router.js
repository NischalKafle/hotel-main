//imports
const router = require('express').Router();
const housekeepingCallsCtrl = require('./housekeepingCalls.controller');

//routes
router.route('/')
.post(housekeepingCallsCtrl.createHousekeepingCalls)
.get(housekeepingCallsCtrl.viewHousekeepingCalls)

router.route('/:id')
.get(housekeepingCallsCtrl.viewHousekeepingCall)
.put(housekeepingCallsCtrl.updateHousekeepingCall)
.delete(housekeepingCallsCtrl.deleteHousekeepingCall)


//exports
module.exports = router;