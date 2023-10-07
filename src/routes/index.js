//imports
const router = require('express').express();
const authRouter = require('../app/auth/auth.router');
const roomsRouter = require('../app/rooms/rooms.router');
const tablesRouter = require('../app/tables/tables.router');
const ordersRouter = require('../app/orders/orders.router');
const bookingsRouter = require('../app/bookings/bookings.router');
const reservationsRouter = require('../app/reservations/reservations.router');
const housekeepingCallsRouter = require('../app/housekeepingCalls/housekeepingCalls.router');

//routes
router.use(authRouter);
router.use('/rooms', roomsRouter);
router.use('/tables', tablesRouter);
router.use('/orders', ordersRouter);
router.use('/bookings', bookingsRouter);
router.use('/reservations', reservationsRouter);
router.use('/housekeepingCalls', reservationsRouter);

//exports
module.exports = router;