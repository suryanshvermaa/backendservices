const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});


const sendMail=async () => {
    const info = await transporter.sendMail({
      from: "your mail",
      to: "<reciprient mail>",
      subject: "Hello ✔",
      html: "<b>Hello world?</b>", // Mail body in html
    });
    console.log("Message sent:", info.messageId);
};

sendMail();