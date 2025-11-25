export const environment = {
  production: false,
  emailConfig: {
    host: 'smtp.elasticemail.com',
    // IMPORTANT: Move this to a backend service or use environment variables
    // Never commit real API tokens to version control
    secureToken: 'YOUR_SMTP_TOKEN_HERE',
    recipientEmail: 'pai.nuneza@gmail.com',
  }
};
