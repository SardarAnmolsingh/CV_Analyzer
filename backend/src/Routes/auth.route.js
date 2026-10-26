const {Router}= require("express")
const controller= require("../Controllers/auth.controller")
const authmiddleware= require("../middleware/auth.middleware")

const authroute = Router();

authroute.post('/login',controller.loginuser)



authroute.post('/register',controller.registeruser)



authroute.get('/logout',controller.logout)



authroute.get('/get-me',authmiddleware.authuser,controller.getme)



module.exports= authroute