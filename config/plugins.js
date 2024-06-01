module.exports = ({ env }) => ({
 
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'noreply@rnext.in',
          defaultReplyTo: 'noreply@rnext.in',
        },
      },
    },
    
  });