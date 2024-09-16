const feedbacks = require("../models/feedbacks");
const nodemailer = require("nodemailer")

exports.feedbackspost = async (req, resp) => {
    const data = new feedbacks({
        ...req.body,
        stars: `${req.body.stars.s1}${req.body.stars.s2}${req.body.stars.s3}${req.body.stars.s4}${req.body.stars.s5}`
      });
    const res = await data.save();
    console.log(req.body.text, req.body.stars, req.body.date);
    await sendMail(req.body.text, req.body.stars, req.body.date);
    resp.send("Inserted Successfully");
};
const sendMail = async (text, star, date) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: '465',
            secure: true, //true for ssl and port 465
            auth: {
                user: "abbasisain066@gmail.com",
                pass: "rnuv ptnh crtj ckid"
            }

        });
        const mailOptions = {
            from: 'abbasisain066@gmail.com',
            to: 'mfarhanabbasi99@gmail.com',
            subject: 'Feedback for your Protfolio ',
            html: `
               <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p style="font-size: 18px;">
        <strong>Stars: </strong>
        ${star.s1 ? "★" : "☆"}${star.s2 ? "★" : "☆"}${star.s3 ? "★" : "☆"}${star.s4 ? "★" : "☆"}${star.s5 ? "★" : "☆"}
    </p>
    
    <p style="font-size: 18px;">
        <strong>Date: </strong>
        ${date}
    </p>
    
    <p style="font-size: 18px;">
        <strong>Feedback: </strong>
        ${text}
    </p>
    
    <hr style="border: 1px solid #ccc;" />
    
    <footer style="font-size: 14px; color: #777;">
        Feedback Recieved!<br/>
        By Farhan Abbasi
    </footer>
</div>

                
            `
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email has been sent Successfully", info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}