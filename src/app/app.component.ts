import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('style.--meteor-opacity')
  meteorOpacity = '1';

  private ticking = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.ticking) {
      return;
    }

    this.ticking = true;
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY || 0;

      this.meteorOpacity = `${Math.max(1 - scrollY / 420, 0)}`;
      this.ticking = false;
    });
  }
}
