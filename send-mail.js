var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    secure: true,
    auth:{
        user: 'youremail@gmail.com',
        pass: 'yourpassword',
       client_id: "102193323dfdsf-dfdsffdsfdsfoloe4ae237.apps.googleusercontent.com", 
       project_id: "test-project", 
       auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token", 
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs", 
        client_secret: "rKewrbjhrjehrewjhwererewwexyyyyyyyyy", 
        redirect_uris: ["http://localhost:3000"], 
        javascript_origins: ["http://localhost:3000"]
    }
})

var mailOptions = {
    from : 'youremail@gmail.com',
    to: 'yourfriendmail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hey Geek there keep studying You will be proud of you one day '
}

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent: '+ info.response);
    }
})

