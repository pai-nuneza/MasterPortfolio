import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  items: any[] = [
    {
      title: 'Sydney Boat Rentals',
      text: 'Booking/Boat Hiring',
      buttonText: 'Go to site',
      link: 'https://sydney-boats.netlify.app',
      tech: 'Angular, Bootstrap',
      imgLink: 'https://images.unsplash.com/photo-1595013694368-aab1b4f70dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2001&q=80', 
    },
    // {
    //   title: 'Inventory System',
    //   text: 'For small business',
    //   buttonText: 'Go to site',
    //   link: '#',
    //   tech: 'ASP.NET',
    //   imgLink: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    // },
    // {
    //   title: 'Online Quiz Game',
    //   text: 'Have fun',
    //   buttonText: 'Go to site',
    //   link: '#',
    //   tech: 'Javascript',
    //   imgLink: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    // },
    // {
    //   title: 'Social Media',
    //   text: 'Show it',
    //   buttonText: 'Go to site',
    //   link: '#',
    //   tech: '.NET and Angular',
    //   imgLink: 'https://plus.unsplash.com/premium_photo-1664100194847-f38903f9cfdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    // },
    // Add more objects as needed
  ];
}
