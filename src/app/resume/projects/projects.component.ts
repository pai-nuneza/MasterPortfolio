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
  professionalProjects: Project[] = [];
  personalProjects: Project[] = [];
  
  filteredProfessionalProjects: Project[] = [];
  filteredPersonalProjects: Project[] = [];
  
  // View mode and search
  viewMode: 'grid' | 'list' = 'grid';
  professionalViewMode: 'grid' | 'list' = 'grid';
  personalViewMode: 'grid' | 'list' = 'grid';
  professionalSearchTerm: string = '';
  personalSearchTerm: string = '';
  
  // Modal states
  showProfessionalFiltersModal: boolean = false;
  showPersonalFiltersModal: boolean = false;
  
  // Filters for professional projects
  selectedProfessionalTechFilters: string[] = [];
  selectedProfessionalStatusFilters: string[] = [];
  
  // Filters for personal projects
  selectedPersonalTechFilters: string[] = [];
  selectedPersonalStatusFilters: string[] = [];
  
  // Temporary filters (for modal preview)
  tempProfessionalTechFilters: string[] = [];
  tempProfessionalStatusFilters: string[] = [];
  tempPersonalTechFilters: string[] = [];
  tempPersonalStatusFilters: string[] = [];
  
  // Available options for filters
  professionalTechStacks: string[] = [];
  professionalStatuses: string[] = [];
  personalTechStacks: string[] = [];
  personalStatuses: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const allProjects = projectsData as Project[];
    
    // Separate professional and personal projects
    const professional = allProjects.filter(p => !(p as any).isPersonal);
    const personal = allProjects.filter(p => (p as any).isPersonal);
    
    // Assign projects without shuffling
    this.professionalProjects = [...professional];
    this.personalProjects = [...personal];
    
    // Initialize filtered arrays
    this.filteredProfessionalProjects = [...this.professionalProjects];
    this.filteredPersonalProjects = [...this.personalProjects];
    
    // Extract unique tech stacks and statuses
    this.extractFilterOptions();
  }
  
  extractFilterOptions(): void {
    // Get unique tech stacks for professional projects
    const professionalTechSet = new Set<string>();
    this.professionalProjects.forEach(project => {
      project.technologies?.forEach(tech => professionalTechSet.add(tech));
    });
    this.professionalTechStacks = Array.from(professionalTechSet).sort();
    
    // Get unique statuses for professional projects
    const professionalStatusSet = new Set<string>();
    this.professionalProjects.forEach(project => {
      if (project.status) professionalStatusSet.add(project.status);
    });
    this.professionalStatuses = Array.from(professionalStatusSet).sort();
    
    // Get unique tech stacks for personal projects
    const personalTechSet = new Set<string>();
    this.personalProjects.forEach(project => {
      project.technologies?.forEach(tech => personalTechSet.add(tech));
    });
    this.personalTechStacks = Array.from(personalTechSet).sort();
    
    // Get unique statuses for personal projects
    const personalStatusSet = new Set<string>();
    this.personalProjects.forEach(project => {
      if (project.status) personalStatusSet.add(project.status);
    });
    this.personalStatuses = Array.from(personalStatusSet).sort();
  }
  
  // Search and filter methods
  applyFilters(type: 'professional' | 'personal'): void {
    const sourceProjects = type === 'professional' ? this.professionalProjects : this.personalProjects;
    const searchTerm = type === 'professional' ? this.professionalSearchTerm : this.personalSearchTerm;
    const techFilters = type === 'professional' ? this.selectedProfessionalTechFilters : this.selectedPersonalTechFilters;
    const statusFilters = type === 'professional' ? this.selectedProfessionalStatusFilters : this.selectedPersonalStatusFilters;
    
    let filtered = [...sourceProjects];
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(term) ||
        project.text.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.technologies?.some(tech => tech.toLowerCase().includes(term))
      );
    }
    
    // Apply tech filters
    if (techFilters.length > 0) {
      filtered = filtered.filter(project => 
        techFilters.some(tech => 
          project.technologies?.includes(tech)
        )
      );
    }
    
    // Apply status filters
    if (statusFilters.length > 0) {
      filtered = filtered.filter(project => 
        statusFilters.includes(project.status)
      );
    }
    
    if (type === 'professional') {
      this.filteredProfessionalProjects = filtered;
    } else {
      this.filteredPersonalProjects = filtered;
    }
  }
  
  onSearchChange(type: 'professional' | 'personal'): void {
    this.applyFilters(type);
  }
  
  // Professional project filter methods
  openProfessionalFiltersModal(): void {
    // Copy current filters to temporary filters
    this.tempProfessionalTechFilters = [...this.selectedProfessionalTechFilters];
    this.tempProfessionalStatusFilters = [...this.selectedProfessionalStatusFilters];
    this.showProfessionalFiltersModal = true;
  }
  
  toggleProfessionalTechFilter(tech: string): void {
    const index = this.tempProfessionalTechFilters.indexOf(tech);
    if (index > -1) {
      this.tempProfessionalTechFilters.splice(index, 1);
    } else {
      this.tempProfessionalTechFilters.push(tech);
    }
  }
  
  toggleProfessionalStatusFilter(status: string): void {
    const index = this.tempProfessionalStatusFilters.indexOf(status);
    if (index > -1) {
      this.tempProfessionalStatusFilters.splice(index, 1);
    } else {
      this.tempProfessionalStatusFilters.push(status);
    }
  }
  
  applyProfessionalFilters(): void {
    // Apply the temporary filters to actual filters
    this.selectedProfessionalTechFilters = [...this.tempProfessionalTechFilters];
    this.selectedProfessionalStatusFilters = [...this.tempProfessionalStatusFilters];
    this.applyFilters('professional');
    this.showProfessionalFiltersModal = false;
  }
  
  clearProfessionalFilters(): void {
    this.tempProfessionalTechFilters = [];
    this.tempProfessionalStatusFilters = [];
  }
  
  removeProfessionalTechFilter(tech: string): void {
    const index = this.selectedProfessionalTechFilters.indexOf(tech);
    if (index > -1) {
      this.selectedProfessionalTechFilters.splice(index, 1);
      this.applyFilters('professional');
    }
  }
  
  removeProfessionalStatusFilter(status: string): void {
    const index = this.selectedProfessionalStatusFilters.indexOf(status);
    if (index > -1) {
      this.selectedProfessionalStatusFilters.splice(index, 1);
      this.applyFilters('professional');
    }
  }
  
  clearAppliedProfessionalFilters(): void {
    this.selectedProfessionalTechFilters = [];
    this.selectedProfessionalStatusFilters = [];
    this.professionalSearchTerm = '';
    this.filteredProfessionalProjects = [...this.professionalProjects];
  }
  
  // Personal project filter methods
  openPersonalFiltersModal(): void {
    // Copy current filters to temporary filters
    this.tempPersonalTechFilters = [...this.selectedPersonalTechFilters];
    this.tempPersonalStatusFilters = [...this.selectedPersonalStatusFilters];
    this.showPersonalFiltersModal = true;
  }
  
  togglePersonalTechFilter(tech: string): void {
    const index = this.tempPersonalTechFilters.indexOf(tech);
    if (index > -1) {
      this.tempPersonalTechFilters.splice(index, 1);
    } else {
      this.tempPersonalTechFilters.push(tech);
    }
  }
  
  togglePersonalStatusFilter(status: string): void {
    const index = this.tempPersonalStatusFilters.indexOf(status);
    if (index > -1) {
      this.tempPersonalStatusFilters.splice(index, 1);
    } else {
      this.tempPersonalStatusFilters.push(status);
    }
  }
  
  applyPersonalFilters(): void {
    // Apply the temporary filters to actual filters
    this.selectedPersonalTechFilters = [...this.tempPersonalTechFilters];
    this.selectedPersonalStatusFilters = [...this.tempPersonalStatusFilters];
    this.applyFilters('personal');
    this.showPersonalFiltersModal = false;
  }
  
  clearPersonalFilters(): void {
    this.tempPersonalTechFilters = [];
    this.tempPersonalStatusFilters = [];
  }
  
  removePersonalTechFilter(tech: string): void {
    const index = this.selectedPersonalTechFilters.indexOf(tech);
    if (index > -1) {
      this.selectedPersonalTechFilters.splice(index, 1);
      this.applyFilters('personal');
    }
  }
  
  removePersonalStatusFilter(status: string): void {
    const index = this.selectedPersonalStatusFilters.indexOf(status);
    if (index > -1) {
      this.selectedPersonalStatusFilters.splice(index, 1);
      this.applyFilters('personal');
    }
  }
  
  clearAppliedPersonalFilters(): void {
    this.selectedPersonalTechFilters = [];
    this.selectedPersonalStatusFilters = [];
    this.personalSearchTerm = '';
    this.filteredPersonalProjects = [...this.personalProjects];
  }
  
  toggleProfessionalViewMode(): void {
    this.professionalViewMode = this.professionalViewMode === 'grid' ? 'list' : 'grid';
  }
  
  togglePersonalViewMode(): void {
    this.personalViewMode = this.personalViewMode === 'grid' ? 'list' : 'grid';
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
