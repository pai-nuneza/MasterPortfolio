import { Component } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showContent = true;

  ngOnInit(): void {
    particlesJS.load('particles-js', '/assets/particles.json', null);
  }
}
