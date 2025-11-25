# MasterPortfolio - Security Notice

## Email Service Configuration

**IMPORTANT SECURITY NOTICE:**

The email service currently uses SMTP.js with credentials stored in environment files. This is **NOT SECURE** for production use because:

1. Frontend code is visible to anyone who views your website
2. API tokens should never be exposed in client-side code
3. Bad actors can extract and misuse your SMTP credentials

### Recommended Solution

**Create a Backend API** to handle email sending securely:

1. Set up a simple backend service (Node.js/Express, Python/Flask, etc.)
2. Store SMTP credentials as environment variables on the server
3. Create an API endpoint that your Angular app calls
4. The backend validates requests and sends emails securely

### Example Backend (Node.js/Express):

```javascript
// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'your-portfolio-domain.com' }));

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'pai.nuneza@gmail.com',
      subject: 'Portfolio Contact',
      html: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3000);
```

### Angular Service Update:

```typescript
sendEmail(emailContent: any): Observable<any> {
  return this.http.post('https://your-backend-api.com/api/send-email', emailContent);
}
```

### Temporary Workaround

For development only:
1. Update `src/environments/environment.ts` with your SMTP token
2. **NEVER commit this file to Git**
3. Add environment files to `.gitignore`

### Alternative Solutions

1. **EmailJS** - Free service for client-side emails (has rate limits)
2. **Formspree** - Simple form backend service
3. **Netlify Forms** - If hosting on Netlify
4. **Firebase Functions** - Serverless backend option
