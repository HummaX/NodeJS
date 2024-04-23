let nodemailer = require('nodemailer')

module.exports = async function mailSender(token){
    console.log(token)
    let transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5f73b0ec129558",
          pass: "2080433f7bec7e"
        }
      })
      return await transporter.sendMail({
        from: '"Hummas 👻" <hummas@hummas.mail.com>', // sender address
        to: "hummas_ch@hotmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${token} James</b>`, // html body
      });
}