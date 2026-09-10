import { Component } from '@angular/core';
import { EmailService } from 'src/services/email.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  name = '';
  email = '';
  projectType = 'Full-stack development';
  message = '';
  copiedEmail = false;
  readonly contactEmail = 'pai.nuneza@gmail.com';

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
    this.projectType = 'Full-stack development';
    this.message = '';
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.contactEmail).then(() => {
      this.copiedEmail = true;
      setTimeout(() => {
        this.copiedEmail = false;
      }, 1800);
    });
  }

  get messageLength(): number {
    return this.message?.length ?? 0;
  }

  get mailtoHref(): string {
    const subject = this.projectType || 'Inquiry from website';
    const bodyLines = [];
    if (this.name) bodyLines.push(`Name: ${this.name}`);
    if (this.email) bodyLines.push(`Email: ${this.email}`);
    if (this.message) bodyLines.push(this.message);
    const body = bodyLines.join('\n\n');
    return `mailto:${this.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
