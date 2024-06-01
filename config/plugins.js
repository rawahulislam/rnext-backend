module.exports = ({ env }) => ({
 
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: '8715096926.abd@gmail.com',
          defaultReplyTo: 'noreply@rnext.in',
        },
      },
    },
    
  });