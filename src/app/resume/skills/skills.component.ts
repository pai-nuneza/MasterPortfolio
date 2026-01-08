import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  years: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'frontend', years: 7 },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'frontend', years: 4 },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend', years: 6 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend', years: 10 },
    { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', category: 'frontend', years: 10 },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend', years: 8 },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend', years: 3 },
    
    // Backend
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'backend', years: 10 },
    { name: '.NET / ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', category: 'backend', years: 10 },
    { name: 'Entity Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'backend', years: 7 },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'backend', years: 9 },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', category: 'backend', years: 6 },
    { name: 'CakePHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg', category: 'backend', years: 5 },
    { name: 'PHP Slim', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'backend', years: 3 },
    
    // Database
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'database', years: 10 },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', years: 9 },
    { name: 'FoxPro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'database', years: 3 },
    
    // Tools & Cloud
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools', years: 10 },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'tools', years: 5 },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'tools', years: 3 },
  ];

  ngOnInit(): void {
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills
      .filter(skill => skill.category === category)
      .sort((a, b) => b.years - a.years); // Sort by years descending
  }
}
