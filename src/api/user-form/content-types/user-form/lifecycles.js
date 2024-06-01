module.exports = {
    async afterCreate(event) {
      const { result } = event;
        const emailService = strapi.plugins['email'].services.email;
        const emailOptions = {
        to: '8715096926.abd@gmail.com', // Replace with the recipient's email address
        from: { name : 'RNEXT', email : 'noreply@rnext.in' } , // Replace with your verified sender email
        subject: `New Client Query`,
        html: `
        <div style="background-color: #f4f4f4; padding: 20px;">
          <h2 style="color: #333;">New Client Query Received</h2>
          <p><strong>Name:</strong> ${result.ClientName}</p>
          <p><strong>Email:</strong> ${result.ClientEmail}</p>
          <p><strong>Services Needed:</strong> ${result.ClientServices}</p>
          <p><strong>Client Message:</strong> ${result.ClientMessage}</p>
      `,
        }
      const Clientemail = {
        to: result.ClientEmail,
        from : { name : 'RNEXT', email : 'noreply@rnext.in' },
        subject : 'Thank You for Your Query',
        text : 'Thankyou for contacting RNEXT, we have recieved your query, our team will get back to you shortly',
        html: `
        <div style="background-color: #f4f4f4; padding: 20px;">
          <h2 style="color: #333;">Thank You for Contacting RNEXT</h2>
          <p>We have received your query, and our team will get back to you shortly within 24 hours.</p>
          <p><a href="https://rnext.in/about-us" style="display:inline-block;padding:10px 20px;font-size:16px;color:white;background-color:#007BFF;text-align:center;text-decoration:none;border-radius:5px;">Visit Website</a></p>
        </div>
          <img src="https://www.rnext.in/static/media/logomob.82a31a79e0f9f66f994a.png" alt="RNEXT Logo" style="display: block; margin-top: 20px;">
        </div>
      `,      
    }

      try {
        await emailService.send(emailOptions);
        await emailService.send(Clientemail);

        strapi.log.info('Emails sent successfully.');
      } catch (err) {
        strapi.log.error('Failed to send email:', err);
      }
    },
  };
  