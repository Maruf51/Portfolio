import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'development', // Adjust based on your environment
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    }
})


export const sendEmail = async (dto) => {
    const { sender, receipients, subject, message } = dto;
    console.log('MAIL_HOST:', process.env.MAIL_HOST);
    console.log('MAIL_PORT:', process.env.MAIL_PORT)
    console.log('MAIL_USER:', process.env.MAIL_USER);
    console.log('MAIL_PASSWORD:', process.env.MAIL_PASSWORD);


    return await transport.sendMail({
        from: sender,
        to: receipients,
        subject,
        html: message,
        text: message
    })
}