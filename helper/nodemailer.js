let mail = require("nodemailer");


function mailer(mailoption){
    return new Promise((resolve,reject)=>{
      let transpoter= mail.createTransport({
         service:"gmail",
         auth:{
                user:"hsayyedamaan@gmail.com",
                pass:"ioikhovgzzjothdk"
         }   
         
        })
        transpoter.sendMail(mailoption,(error,info)=>{
            if(error){
                reject(false)
            }
            resolve(" send mail "+true)

        })
    })
}


module.exports={mailer}