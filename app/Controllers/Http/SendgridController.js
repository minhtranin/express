'use strict'
const sgMail = require('@sendgrid/mail');
const axios = require('axios')
//const env = use('.env');
class SendgridController {
    
    async home({view}){
        
        // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        // const msg = {
        // to: 'minhtrannd97@gmail.com',
        // from: 'minhtran.in@outlook.com',
        // subject: 'sendGrid test',
        // text: 'and easy to do anywhere, even with Node.js',
        // html: '<strong>test send mail by sendgrid...Minh1</strong>',
        // };
        //  sgMail.send(msg);
        // console.log(process.env.SENDGRID_API_KEY)
        const datamail = {
            "name":"TCMinh",
            "username":"TCM",
            "password":"",
            "email":""
            }
            const dulieu = "minhtran.in@outlook.com,minhtran97@gmail.com,minhtc97@gmail.com"
            const dulieusp = dulieu.split(',')
            const dulieuend = dulieusp.map(item=>{
               return {
                  "email" : item
               }
            })
            

        await axios({
            method:'POST',
            url: "https://api.sendgrid.com/v3/mail/send",
		    data : {
                    "from":{
                       "email" : "minhtran.in@outlook.com",
                    },
                    "personalizations":[{
                          "to":[
                             {
                                "email" : "minhtcps08807@fpt.edu.vn"
                             }
                          ],
                          "cc":dulieuend,
                          "dynamic_template_data" : datamail
                       }
                    ],
                    "template_id": process.env.TEMPLATE_ID,
                 }
                        
              ,
		    headers: {"Authorization" : 'Bearer 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'}
        }).then((res)=>{
          console.log(res)  
        })
        .catch(err=>{
            console.log(err)
        })


        return view.render('index')
    }
}

module.exports = SendgridController
