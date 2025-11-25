import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import projectsData from '../../../assets/data/projects-enhanced.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  items: Project[] = projectsData as Project[];

  constructor(private router: Router) {}

  viewProject(projectId: string, event: Event): void {
    event.preventDefault();
    this.router.navigate(['/project', projectId]);
  }
}
