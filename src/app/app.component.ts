import { Component, HostListener, Renderer2 } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // particlesJS.load('particles-js', '/assets/particles.json', null);
  }

  // This code will put glassy when scrolling down
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const navbar = document.querySelector('.navbar');
  //   if (window.pageYOffset > 0) {
  //     this.renderer.addClass(navbar, 'glassy');
  //   } else {
  //     this.renderer.removeClass(navbar, 'glassy');
  //   }
  // }
}
