//imports
const router = require('express').Router();
const reservationsCtrl = require('./reservations.controller');

//routes
router.route('/')
.post(reservationsCtrl.createReservations)
.get(reservationsCtrl.viewReservations)

router.route('/:id')
.get(reservationsCtrl.viewRoom)
.put(reservationsCtrl.updateRoom)
.delete(reservationsCtrl.deleteRoom)


//exports
module.exports = router;