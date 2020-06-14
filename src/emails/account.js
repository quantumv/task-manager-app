const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'quantum.v.rl@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let us know how you like the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'quantum.v.rl@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. We hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}