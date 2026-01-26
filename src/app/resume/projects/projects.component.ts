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
  
  // Available options for filters (keeping for potential future use)
  techStacks: string[] = [];
  statuses: string[] = [];

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
    
    // Extract unique tech stacks and statuses (keeping for potential future use)
    this.extractFilterOptions();
  }
  
  extractFilterOptions(): void {
    // Get unique tech stacks
    const techSet = new Set<string>();
    this.allProjects.forEach(project => {
      project.technologies?.forEach(tech => techSet.add(tech));
    });
    this.techStacks = Array.from(techSet).sort();
    
    // Get unique statuses
    const statusSet = new Set<string>();
    this.allProjects.forEach(project => {
      if (project.status) statusSet.add(project.status);
    });
    this.statuses = Array.from(statusSet).sort();
  }
  
  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  viewProject(projectId: string, event: Event): void {
    event.preventDefault();
    this.router.navigate(['/project', projectId]);
  }

  getStatusClass(status: string): string {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('progress') || statusLower.includes('development')) return 'status-progress';
    if (statusLower.includes('mvp')) return 'status-mvp';
    if (statusLower.includes('released') || statusLower.includes('live')) return 'status-released';
    if (statusLower.includes('beta')) return 'status-beta';
    if (statusLower.includes('archived') || statusLower.includes('deprecated')) return 'status-archived';
    return 'status-default';
  }
}
