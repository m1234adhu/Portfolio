 //handle mail
 const config = {
     
    SecureToken: 'bc4e834e-4c5e-4086-8b69-864e5ced004b',
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }

const sendEmailController = (req, res) => {
    try {
        const {name, email, msg} =  req.body

        //Validation
        if(!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: 'Please provise all fields'
            })
        }

        //email matter

           return res.status(200).send({
            Success: true,
            message: 'Message sent Successfully',
           })
    }catch (error){
         console.log(error)
         return res.status(500).send({
            success: false,
            message: 'Send Email API Error',
            error
         })
    }
};

module.exports = { sendEmailController };