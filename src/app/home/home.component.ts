import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  strings = [
    'Application Development',
    'Frontend Angular',
    'Database Structure',
    'Cloud Computing',
    'Web Development',
    'Git Source Control',
    'IIS Deployments',
  ];
}
