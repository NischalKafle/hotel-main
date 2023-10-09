//imports
const app = require('express').express();
const router = require('../routes/')

//body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api.v1', router);

//404 Handle
app.use((req, res, next)=>{
    res.status(404).json({
        result: null,
        message: "Page not found",
        meta: null
    })
})

//Error Handling
app.use((error, req, res, next)=>{
    const code = error.code??500;
    const message = error.message??"Server Error";
    res.status(code).json({
        result: null,
        message: message,
        meta: null
    })
})

//exports
module.exports = app;