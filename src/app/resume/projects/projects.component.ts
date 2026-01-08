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
  filteredProjects: Project[] = [];
  
  // View mode and search
  viewMode: 'grid' | 'list' = 'grid';
  searchTerm: string = '';
  
  // Modal states
  showFiltersModal: boolean = false;
  
  // Filters
  selectedTechFilters: string[] = [];
  selectedStatusFilters: string[] = [];
  selectedTypeFilters: string[] = [];
  
  // Temporary filters (for modal preview)
  tempTechFilters: string[] = [];
  tempStatusFilters: string[] = [];
  tempTypeFilters: string[] = [];
  
  // Available options for filters
  techStacks: string[] = [];
  statuses: string[] = [];
  projectTypes: string[] = ['Professional', 'Personal'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const projects = projectsData as Project[];
    
    // Add project type property to each project and set featured to false by default
    this.allProjects = projects.map(p => ({
      ...p,
      projectType: (p as any).isPersonal ? 'Personal' : 'Professional',
      featured: p.featured || false
    }));

    // Sort: featured projects first
    this.allProjects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
    
    // Initialize filtered array
    this.filteredProjects = [...this.allProjects];
    
    // Extract unique tech stacks and statuses
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
  
  // Search and filter methods
  applyFilters(): void {
    let filtered = [...this.allProjects];
    
    // Apply search
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(term) ||
        project.text.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.technologies?.some(tech => tech.toLowerCase().includes(term))
      );
    }
    
    // Apply tech filters
    if (this.selectedTechFilters.length > 0) {
      filtered = filtered.filter(project => 
        this.selectedTechFilters.some(tech => 
          project.technologies?.includes(tech)
        )
      );
    }
    
    // Apply status filters
    if (this.selectedStatusFilters.length > 0) {
      filtered = filtered.filter(project => 
        this.selectedStatusFilters.includes(project.status)
      );
    }
    
    // Apply type filters
    if (this.selectedTypeFilters.length > 0) {
      filtered = filtered.filter(project => 
        this.selectedTypeFilters.includes((project as any).projectType)
      );
    }

    // Sort: featured projects first
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
    
    this.filteredProjects = filtered;
  }
  
  onSearchChange(): void {
    this.applyFilters();
  }
  
  // Filter methods
  openFiltersModal(): void {
    // Copy current filters to temporary filters
    this.tempTechFilters = [...this.selectedTechFilters];
    this.tempStatusFilters = [...this.selectedStatusFilters];
    this.tempTypeFilters = [...this.selectedTypeFilters];
    this.showFiltersModal = true;
  }
  
  toggleTechFilter(tech: string): void {
    const index = this.tempTechFilters.indexOf(tech);
    if (index > -1) {
      this.tempTechFilters.splice(index, 1);
    } else {
      this.tempTechFilters.push(tech);
    }
  }
  
  toggleStatusFilter(status: string): void {
    const index = this.tempStatusFilters.indexOf(status);
    if (index > -1) {
      this.tempStatusFilters.splice(index, 1);
    } else {
      this.tempStatusFilters.push(status);
    }
  }
  
  toggleTypeFilter(type: string): void {
    const index = this.tempTypeFilters.indexOf(type);
    if (index > -1) {
      this.tempTypeFilters.splice(index, 1);
    } else {
      this.tempTypeFilters.push(type);
    }
  }
  
  applyFiltersFromModal(): void {
    // Apply the temporary filters to actual filters
    this.selectedTechFilters = [...this.tempTechFilters];
    this.selectedStatusFilters = [...this.tempStatusFilters];
    this.selectedTypeFilters = [...this.tempTypeFilters];
    this.applyFilters();
    this.showFiltersModal = false;
  }
  
  clearFiltersInModal(): void {
    this.tempTechFilters = [];
    this.tempStatusFilters = [];
    this.tempTypeFilters = [];
  }
  
  removeTechFilter(tech: string): void {
    const index = this.selectedTechFilters.indexOf(tech);
    if (index > -1) {
      this.selectedTechFilters.splice(index, 1);
      this.applyFilters();
    }
  }
  
  removeStatusFilter(status: string): void {
    const index = this.selectedStatusFilters.indexOf(status);
    if (index > -1) {
      this.selectedStatusFilters.splice(index, 1);
      this.applyFilters();
    }
  }
  
  removeTypeFilter(type: string): void {
    const index = this.selectedTypeFilters.indexOf(type);
    if (index > -1) {
      this.selectedTypeFilters.splice(index, 1);
      this.applyFilters();
    }
  }
  
  clearAppliedFilters(): void {
    this.selectedTechFilters = [];
    this.selectedStatusFilters = [];
    this.selectedTypeFilters = [];
    this.searchTerm = '';
    this.filteredProjects = [...this.allProjects];
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
