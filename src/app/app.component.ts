import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 1500); // Adjust the delay time according to your needs
  }
}
