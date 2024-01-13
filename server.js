// Import necessary modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const port = 3000;

// Configure the app to use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle form submissions
app.post('/submit-report', (req, res) => {
    // Process the form data
    const formData = req.body;

    // Send email
    sendEmail(formData)
        .then(() => res.send({ success: true, message: 'Report submitted successfully' }))
        .catch(error => res.status(500).send({ success: false, message: `Error: ${error.message}` }));
});

// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

// Function to send email
function sendEmail(formData) {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'josephkoigi100@gmail.com', // Replace with your Gmail email address
            pass: 'Wawa2wawa2'   // Replace with your Gmail password or an app-specific password
        }
    });

    // Create email options
    const mailOptions = {
        from: 'josephkoigi100@gmail.com',
        to: 'koigij@yahoo.com', // Replace with the recipient's email address
        subject: 'New Safety Report',
        html: `<p>Site Name: ${formData.siteName}</p>
               <p>Project Name: ${formData.projectName}</p>
               <!-- Add more fields as needed -->`
    };

    // Send the email
    return transporter.sendMail(mailOptions);
}
