//imports
const router = require('express').express();
const authRouter = require('../app/auth/auth.router');
const roomsRouter = require('../app/rooms/rooms.router');
const tablesRouter = require('../app/tables/tables.router');
const ordersRouter = require('../app/orders/orders.router');

//routes
router.use(authRouter);
router.use('/rooms', roomsRouter);
router.use('/tables', tablesRouter);
router.use('/orders', ordersRouter);

//exports
module.exports = router;