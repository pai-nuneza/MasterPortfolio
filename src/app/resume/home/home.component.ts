import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  strings = [
    'Application Development',
    'Frontend Development',
    'Database Structure',
    'Cloud Computing Azure/AWS',
    'Web Development',
    'Git Source Control',
    'IIS Deployments',
    'Web Design',
  ];
}
