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
  calendlyShown = false;
  calendlyLoading = false;
  calendlyError = false;
  readonly calendlyUrl = 'https://calendly.com/pai-nuneza/30min?hide_gdpr_banner=1';

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

  loadCalendly(): void {
    if (this.calendlyShown || this.calendlyLoading) return;
    this.calendlyLoading = true;

    const initInline = () => {
      try {
        const Calendly = (window as any).Calendly;
        const parent = document.getElementById('calendly-container');
        if (Calendly && parent) {
          Calendly.initInlineWidget({
              url: this.calendlyUrl,
            parentElement: parent,
          });
          this.calendlyShown = true;
            this.calendlyError = false;
        }
      } catch (e) {
        console.error('Calendly init error', e);
          // Fallback: show the container and mark an error so we can surface a fallback link
          this.calendlyShown = true;
          this.calendlyError = true;
      } finally {
        this.calendlyLoading = false;
      }
    };

    // If Calendly script already present, init immediately
    if ((window as any).Calendly && (window as any).Calendly.initInlineWidget) {
      initInline();
      return;
    }

    // Otherwise, dynamically load the widget script then init
    const existing = document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]');
    if (existing) {
      // Wait a short moment for script to execute
      const waitForCalendly = () => {
        if ((window as any).Calendly && (window as any).Calendly.initInlineWidget) {
          initInline();
        } else {
          setTimeout(waitForCalendly, 200);
        }
      };
      waitForCalendly();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => initInline();
    script.onerror = () => {
      console.error('Failed to load Calendly script');
      this.calendlyLoading = false;
      this.calendlyShown = true; // show container as fallback
      this.calendlyError = true;
    };
    document.body.appendChild(script);
  }

  get mailtoHref(): string {
    const to = 'pai.nuneza@gmail.com';
    const subject = 'Inquiry from website';
    const bodyLines = [];
    if (this.message) bodyLines.push(this.message);
    if (this.name) bodyLines.push('\n\nRegards, ' + this.name);
    const body = bodyLines.join('\n');
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
