//imports
const router = require('express').Router();
const ordersCtrl = require('./orders.controller');

//routes
router.route('/')
.post(ordersCtrl.createOrders)
.get(ordersCtrl.viewOrders)

router.route('/:id')
.get(ordersCtrl.viewRoom)
.put(ordersCtrl.updateRoom)
.delete(ordersCtrl.deleteRoom)



//exports
module.exports = router;