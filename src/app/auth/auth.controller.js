//Class
class authController{
    register = (req, res, next)=>{
        
    }
    verifyToken = (req, res, next)=>{

    }
    setPassword = (req, res, next)=>{
        
    }
    login = (req, res, next)=>{

    }
    forgotPassword = (req, res, next)=>{

    }
    me = (req, res, next)=>{

    }
    logout = (req, res, next)=>{

    }
}

//object -- Singleton Approach
const authCtrl = new authController();

//exports
module.exports(authCtrl);