import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: any[] = [
    {
      title: 'Website Development',
      description: 'Creating responsive and visually appealing websites',
      icon: 'fas fa-briefcase',
      delay: 100
    },
    {
      title: 'Front-end Development',
      description: 'Building interactive user interfaces with HTML, CSS, JavaScript and Angular',
      icon: 'fas fa-check-square',
      delay: 200
    },
    {
      title: 'Back-end Development',
      description: 'Developing server-side logic and database integration',
      icon: 'fas fa-chart-bar',
      delay: 300
    },
    {
      title: 'Website Maintenance',
      description: 'Providing ongoing support and updates for existing websites',
      icon: 'fas fa-binoculars',
      delay: 200
    },
    {
      title: 'Cloud Deployments',
      description: 'Deploying web applications to cloud platforms for scalability and reliability',
      icon: 'fas fa-cloud-upload-alt',
      delay: 500
    }
    // Add more service objects as needed
  ];

}
