//imports
const router = require('express').Router();
const tablesCtrl = require('./tables.controller');

//routes
router.route('/')
.post(tablesCtrl.createTables)
.get(tablesCtrl.viewTables)

router.route('/:id')
.get(tablesCtrl.viewRoom)
.put(tablesCtrl.updateRoom)
.delete(tablesCtrl.deleteRoom)



//exports
module.exports = router;