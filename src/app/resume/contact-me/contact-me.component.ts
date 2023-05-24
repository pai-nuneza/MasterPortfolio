import { Component } from '@angular/core';
import { EmailService } from 'src/services/email.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  name!: string;
  email!: string;
  message!: string;

  constructor(private emailService: EmailService) {}

  submitForm(): void {
    const emailContent = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    this.emailService.sendEmail(emailContent).subscribe({
      next: (v) => {
        alert('Message sent successfully.');
        this.clearForm();
      },
      error: (e) => {
        console.log(e)
        alert('An error occurred. Please try again later.');
      },
    });
  }

  clearForm(): void {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
