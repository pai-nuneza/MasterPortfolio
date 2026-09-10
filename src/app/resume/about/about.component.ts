import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  stats = [
    { value: '10+', label: 'years experience' },
    { value: '20+', label: 'systems and projects' },
    { value: '12+', label: 'core technologies' },
    { value: '4+', label: 'industries served' },
  ];

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
}
