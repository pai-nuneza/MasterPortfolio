import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailApiUrl = 'https://api.smtpjs.com/v3/send';

  constructor(private http: HttpClient) {}

  sendEmail(emailContent: any): Observable<any> {
    const body = {
      Host: 'smtp.elasticemail.com',
      SecureToken: 'ozfqlyldzuulaldh',
      To: 'pai.nuneza@gmail.com',
      From: emailContent.email,
      Subject: 'Message from Portfolio',
      Body: `Name: ${emailContent.name}<br>Email: ${emailContent.email}<br>Message: ${emailContent.message}`,
    };

    return this.http.post(this.emailApiUrl, body);
  }
}
