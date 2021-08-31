const userDetails = require('./userData')

exports.sendMail = function(recipient,callback){
    const nodeMailer = require('nodemailer')

    return new Promise(function(resolve,reject){
        async function main(){
            let transporter = nodeMailer.createTransport({
                service:"gmail",
                port:587,
                secure:false,
                auth:{
                    user:"madhusudan707@gmail.com",
                    pass:userDetails
                }
            })
    
            let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: recipient, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello" // plain text body
            })
    
            console.log("Message sent: %s", info.messageId);
            if(info.messageId){
                callback(null,"Done")
                // resolve("Message Sent Successfully")
            }
            else{
                callback("Error" , null)
                //reject("")
            }
    
        }
        main().catch(function(){
            callback("Error",  null)
            //reject("Error")
        });
    })
        

   
}