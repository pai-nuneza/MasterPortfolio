import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  imageLoaded = false;

  coreStack = [
    'C#',
    '.NET',
    'ASP.NET Core',
    'Angular',
    'Vue.js',
    'React',
    'TypeScript',
    'PHP',
    'Laravel',
    'SQL Server',
    'MySQL',
    'PostgreSQL',
    'Azure DevOps',
    'GitHub Copilot',
  ];

  markImageLoaded(): void {
    window.setTimeout(() => this.imageLoaded = true, 1000);
  }
}
