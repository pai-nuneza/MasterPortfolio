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
    particlesJS.load('particles-js', '/assets/particles.json', null);
  }
}
