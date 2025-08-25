
import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail = async (options) => {
    new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanager.com"
        }
    })
    const emailTextual = mailGenerator.generatePlainText(options.mailGenContent)

    const emailHtml = mailGenerator.generate(options.mailGenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email Service Failed! Make sure you have provided correct credentials!", error)
    }
}


const emailVerificationContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! Excited?",
            action:{
                instructions: "To verify your email please click on the following button",
                button:{
                    color: "#22BC61",
                    link: verificationUrl
                }
            },
            outro: "Need Help, or have questions just reply to this email, we will get back to you soon"
        }
    }
}

const forgotPasswordContent = (username, passwordResetUrl) => {
    return{
        body: {
            name: username,
            intro: "We got a request to reset your password!",
            action:{
                instructions: "To reset your password please click on the following button",
                button:{
                    color: "#22B",
                    text: "Reset Password",
                    link: passwordResetUrl
                }
            },
            outro: "Need Help, or have questions just reply to this email, we will get back to you soon"
        }
    }
}

export { emailVerificationContent, forgotPasswordContent, sendEmail}