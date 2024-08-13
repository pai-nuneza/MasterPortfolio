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
      tech: 'Angular 17, Bootstrap 5',
      imgLink: 'https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    {
      title: 'Gamevault',
      text: 'Video Games, Online, Multiplayer',
      buttonText: 'Site - In Progress',
      link: '#',
      tech: 'Vue 3, Steam API',
      imgLink: 'https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg'
    },
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
