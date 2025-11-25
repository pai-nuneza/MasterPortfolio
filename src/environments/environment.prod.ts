export const environment = {
  production: true,
  emailConfig: {
    host: 'smtp.elasticemail.com',
    // IMPORTANT: In production, use backend API to handle email sending
    // Never expose API tokens in frontend code
    secureToken: '', // This should be handled by backend
    recipientEmail: 'pai.nuneza@gmail.com',
  }
};
