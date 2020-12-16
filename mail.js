
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'patanyusufkhan222@gmail.com', // TODO: your gmail account 
        pass: '@likh@n@123$' // TODO: your gmail password
    }
});

// Step 2
transporter.use('compile',hbs({
    viewEngine:'express-handlebars',
    viewPath:'./views/'
}));

// Step 3
let mailOptions = {
    from: 'patanyusufkhan222@gmail.com', // TODO: email sender
    to: 'yusufkhan143@outlook.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
   teplate:'home',
    context: {
        name: 'Accime Esterling'
    } // send extra values to template
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(err);
        return log('Error occurs');
       
    }
    return log('Email sent!!!');
});