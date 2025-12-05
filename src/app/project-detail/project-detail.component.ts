import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project.model';
import projectsData from '../../assets/data/projects-enhanced.json';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  allProjects: Project[] = projectsData as Project[];
  selectedImageIndex: number = 0;
  relatedProjects: Project[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectId = params.get('id');
      if (projectId) {
        this.loadProject(projectId);
      }
    });
  }

  loadProject(id: string): void {
    this.project = this.allProjects.find((p) => p.id === id);
    if (this.project) {
      this.loadRelatedProjects();
    } else {
      // Project not found, redirect to home
      this.router.navigate(['/']);
    }
  }

  loadRelatedProjects(): void {
    if (this.project) {
      this.relatedProjects = this.allProjects
        .filter(
          (p) =>
            p.id !== this.project!.id &&
            (p.category === this.project!.category || p.featured)
        )
        .slice(0, 3);
    }
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: Add a toast notification here
      console.log('Copied to clipboard:', text);
    });
  }

  openGalleryImage(index: number): void {
    // You can implement a lightbox/modal here if needed
    // For now, just select the image in the main gallery
    if (this.project && this.project.gallery) {
      this.selectedImageIndex = index;
    }
  }

  goToProject(projectId: string): void {
    this.router.navigate(['/project', projectId]);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'released':
        return 'bg-success';
      case 'in-progress':
        return 'bg-warning';
      case 'planned':
        return 'bg-secondary';
      default:
        return 'bg-info';
    }
  }

  getStatusText(status: string): string {
    return status
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
