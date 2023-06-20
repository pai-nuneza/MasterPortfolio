import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  items: any[] = [
    {
      title: 'E-Commerce',
      text: 'E-Commerce Frontend made with Angular',
      buttonText: 'Go to site'
    },
    {
      title: 'Team Website',
      text: 'Website for team of software developers',
      buttonText: 'Go to site'
    },
    {
      title: 'Weather Application',
      text: 'Shows weather data requested from third party API',
      buttonText: 'Go to site'
    },
    {
      title: 'Job Board',
      text: 'Post jobs and apply',
      buttonText: 'Go to site'
    },
    // Add more objects as needed
  ];
}
