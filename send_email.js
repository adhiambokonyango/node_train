var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marykonyango74@gmail.com',
        pass: 'Mary31547207'
    }
});

var mailOptions = {
    from: 'marykonyango74@gmail.com',
    to: 'marykonyango74@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
});
