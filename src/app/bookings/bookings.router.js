//imports
const router = require('express').Router();
const bookingsCtrl = require('./bookings.controller');

//routes
router.route('/')
.post(bookingsCtrl.createBookings)
.get(bookingsCtrl.viewBookings)

router.route('/:id')
.get(bookingsCtrl.viewRoom)
.put(bookingsCtrl.updateRoom)
.delete(bookingsCtrl.deleteRoom)



//exports
module.exports = router;