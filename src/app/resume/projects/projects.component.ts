import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import projectsData from '../../../assets/data/projects-enhanced.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  items: Project[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = this.shuffleArray([...projectsData as Project[]]);
  }

  shuffleArray(array: Project[]): Project[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  viewProject(projectId: string, event: Event): void {
    event.preventDefault();
    this.router.navigate(['/project', projectId]);
  }
}
