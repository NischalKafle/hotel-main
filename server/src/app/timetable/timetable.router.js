//imports
const router = require('express').Router();
const TimetablesCtrl = require('./timetables.controller');

//routes
router.route('/')
.post(TimetablesCtrl.createTimetables)
.get(TimetablesCtrl.viewTimetables)

router.route('/:id')
.get(TimetablesCtrl.viewTimetable)
.put(TimetablesCtrl.updateTimetable)
.delete(TimetablesCtrl.deleteTimetable);

//exports
module.exports = router;