import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailApiUrl = 'https://api.smtpjs.com/v3/send';

  constructor(private http: HttpClient) {}

  sendEmail(emailContent: any): Observable<any> {
    // WARNING: This implementation exposes API credentials in the frontend
    // RECOMMENDED: Create a backend API endpoint to handle email sending securely
    const body = {
      Host: environment.emailConfig.host,
      SecureToken: environment.emailConfig.secureToken,
      To: environment.emailConfig.recipientEmail,
      From: emailContent.email,
      Subject: 'Message from Portfolio',
      Body: `Name: ${emailContent.name}<br>Email: ${emailContent.email}<br>Message: ${emailContent.message}`,
    };

    return this.http.post(this.emailApiUrl, body);
  }
}
