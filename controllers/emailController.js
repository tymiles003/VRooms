const User = require("../models/user");
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

module.exports = {

    

    /**
     * send emai to vrooms from user
     */
    sendEmail: function(req, res) {
        console.log("Users answers: ", req.params.answers);
        console.log("Users answers: ", req.body.answers);
        

        var emailAddress = req.body.answers[1];
		var username = req.body.answers[0];
        var messageType = req.body.answers[2];
        var message = req.body.answers[3];
        var transporter = nodemailer.createTransport(smtpTransport({
		service: 'Gmail',
        auth: {
            user: 'vroomsus@gmail.com', // Your email id
            pass: '!!ucsd20170403' // Your password
        },
        rejectUnauthorized:false
	    }));

    var mailOptions = {
			    from: emailAddress, // sender address
			    to: 'vroomsus@gmail.com', // list of receivers
			    subject: `Regarding ${messageType}`, // Subject line
			    // text: message //, // plaintext body
			    html: 'Hello, <br><br>'+message + '<br><br>From, <br>'+username + '<br>' + emailAddress // You can choose to send an HTML body instead
			};
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        console.log(error);
		        res.send(error);
		        // res.json({yo: 'error'});
		    }else{
		        console.log('Message sent: ' + info.response);

		        res.send("success");
		    }
		});
    
        
    },

   
};
