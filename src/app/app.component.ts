import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('style.--scroll-depth')
  scrollDepth = '0px';

  @HostBinding('style.--scroll-tilt')
  scrollTilt = '0deg';

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

      this.scrollDepth = `${Math.min(scrollY * 0.12, 140)}px`;
      this.scrollTilt = `${Math.max(Math.min(scrollY * 0.002, 1.8), -1.8)}deg`;
      this.meteorOpacity = `${Math.max(1 - scrollY / 420, 0)}`;
      this.ticking = false;
    });
  }
}
