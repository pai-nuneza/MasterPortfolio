import { Component } from '@angular/core';
import projectsData from '../../../assets/data/projects.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  items: any[] = projectsData;
}
