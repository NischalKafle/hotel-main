//imports
const router = require('express').Router();
const authCtrl = require('./auth.controller');

//routes
router.post('/register', authCtrl.register)
router.get('/verify-token/:token', authCtrl.verifyToken)
router.post('/set-password/:token', authCtrl.setPassword)
router.post('/login', authCtrl.login)
router.post('/forgot-password', authCtrl.forgotPassword)
router.get('/me', authCtrl.me)
router.post('/logout', authCtrl.logout)

//exports
module.exports = router;