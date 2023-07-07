import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  items: any[] = [
    {
      title: 'Digital Store',
      text: 'A store website for toys made with Angular',
      buttonText: 'Go to site',
      link: '#'
    },
    {
      title: 'Team Website',
      text: 'Website for team of software developers',
      buttonText: 'Go to site',
      link: 'https://pai-teamweb.netlify.app/#/'
    },
    {
      title: 'Travel Application',
      text: 'Shows weather data requested from third party API',
      buttonText: 'Go to site',
      link: '#'
    },
    {
      title: 'Jobs App',
      text: 'Post jobs and apply',
      buttonText: 'Go to site',
      link: '#'
    },
    // Add more objects as needed
  ];
}
