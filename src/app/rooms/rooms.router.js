//imports
const router = require('express').Router();
const roomsCtrl = require('./rooms.controller');

//routes
router.route('/')
.post(roomsCtrl.createRooms)
.get(roomsCtrl.viewRooms)

router.route('/:id')
.get(roomsCtrl.viewRoom)
.put(roomsCtrl.updateRoom)
.delete(roomsCtrl.deleteRoom)


//exports
module.exports = router;