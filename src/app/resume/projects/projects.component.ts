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
  allProjects: Project[] = [];
  professionalProjects: Project[] = [];
  personalProjects: Project[] = [];
  
  // View mode
  viewMode: 'grid' | 'list' = 'grid';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const projects = projectsData as Project[];
    
    // Add project type property to each project and set featured to false by default
    this.allProjects = projects.map(p => ({
      ...p,
      projectType: (p as any).isPersonal ? 'Personal' : 'Professional',
      featured: p.featured || false
    }));

    // Separate projects by type
    this.professionalProjects = this.allProjects.filter(p => p.projectType === 'Professional');
    this.personalProjects = this.allProjects.filter(p => p.projectType === 'Personal');

    // Sort each array: featured projects first
    const sortByFeatured = (a: Project, b: Project) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    };
    
    this.professionalProjects.sort(sortByFeatured);
    this.personalProjects.sort(sortByFeatured);
  }
  
  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  viewProject(projectId: string, event: Event): void {
    event.preventDefault();
    this.router.navigate(['/project', projectId]);
  }
}
