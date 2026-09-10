import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import projectsData from '../../../assets/data/projects-enhanced.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  selectedProject?: Project;

  ngOnInit(): void {
    const projects = projectsData as Project[];
    
    // Add project type property to each project and set featured to false by default
    this.allProjects = projects.map(p => ({
      ...p,
      projectType: (p as any).isPersonal ? 'Personal' : 'Professional',
      featured: p.featured || false
    }));

    this.allProjects.sort((a: Project, b: Project) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }

  openProject(project: Project, event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = undefined;
  }

  visibleTechnologies(project: Project): string[] {
    return (project.technologies || []).slice(0, 4);
  }

  extraTechnologyCount(project: Project): number {
    return Math.max((project.technologies?.length || 0) - 4, 0);
  }
}
