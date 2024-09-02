import { Component } from '@angular/core';
import projectsData from '../../assets/data/projects.json';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent {
  items: any[] = projectsData;
}
