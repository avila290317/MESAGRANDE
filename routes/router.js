const {Router} = require("express")
const controller =  require( "../controller/controller.js");
const router = Router();

router
 .post("/sendmail", controller.sendMail)
 .post("/sendjobmail", controller.sendJobMail);


 module.exports=router;