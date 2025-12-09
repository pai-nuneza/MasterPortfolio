import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  years: number;
  percentage: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  showYears = false;
  showFiltersModal = false;
  sortOrder: 'asc' | 'desc' = 'desc';

  // Filter state
  selectedCategoryFilters: string[] = [];
  tempCategoryFilters: string[] = [];

  // Available filter options
  categories: string[] = ['Frontend', 'Backend', 'Database', 'Tools'];

  skills: Skill[] = [
    // Frontend
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'frontend', years: 7, percentage: 90 },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'frontend', years: 4, percentage: 85 },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend', years: 6, percentage: 88 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend', years: 10, percentage: 95 },
    { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', category: 'frontend', years: 10, percentage: 92 },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend', years: 8, percentage: 90 },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend', years: 3, percentage: 80 },
    
    // Backend
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'backend', years: 10, percentage: 95 },
    { name: '.NET / ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', category: 'backend', years: 10, percentage: 95 },
    { name: 'Entity Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'backend', years: 7, percentage: 88 },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'backend', years: 9, percentage: 90 },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', category: 'backend', years: 6, percentage: 88 },
    { name: 'CakePHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg', category: 'backend', years: 5, percentage: 82 },
    { name: 'PHP Slim', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'backend', years: 3, percentage: 75 },
    
    // Database
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'database', years: 10, percentage: 92 },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', years: 9, percentage: 90 },
    { name: 'FoxPro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'database', years: 3, percentage: 70 },
    
    // Tools & Cloud
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools', years: 10, percentage: 93 },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'tools', years: 5, percentage: 85 },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'tools', years: 3, percentage: 78 },
  ];

  filteredSkills: Skill[] = [];
  animateProgress = false;

  ngOnInit(): void {
    this.sortSkills();
    this.filteredSkills = [...this.skills];
  }

  toggleYearsDisplay(): void {
    this.showYears = !this.showYears;
    
    if (this.showYears) {
      // Reset animation
      this.animateProgress = false;
      
      // Trigger animation after a brief delay
      setTimeout(() => {
        this.animateProgress = true;
      }, 50);
    }
  }

  toggleSort(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortSkills();
    this.filterSkills();
  }

  sortSkills(): void {
    this.skills.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.years - b.years;
      } else {
        return b.years - a.years;
      }
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  // Filter Modal Methods
  openFiltersModal(): void {
    this.tempCategoryFilters = [...this.selectedCategoryFilters];
    this.showFiltersModal = true;
  }

  toggleCategoryFilter(category: string): void {
    const index = this.tempCategoryFilters.indexOf(category);
    if (index > -1) {
      this.tempCategoryFilters.splice(index, 1);
    } else {
      this.tempCategoryFilters.push(category);
    }
  }

  applyFilters(): void {
    this.selectedCategoryFilters = [...this.tempCategoryFilters];
    this.filterSkills();
    this.showFiltersModal = false;
  }

  clearFilters(): void {
    this.tempCategoryFilters = [];
  }

  clearAppliedFilters(): void {
    this.selectedCategoryFilters = [];
    this.filterSkills();
  }

  removeCategoryFilter(category: string): void {
    const index = this.selectedCategoryFilters.indexOf(category);
    if (index > -1) {
      this.selectedCategoryFilters.splice(index, 1);
      this.filterSkills();
    }
  }

  filterSkills(): void {
    this.filteredSkills = this.skills.filter(skill => {
      // Category filter
      const matchesCategory = this.selectedCategoryFilters.length === 0 ||
        this.selectedCategoryFilters.some(cat => 
          cat.toLowerCase() === skill.category.toLowerCase()
        );

      return matchesCategory;
    });
  }

  getCategoryIcon(category: string): string {
    switch (category.toLowerCase()) {
      case 'frontend':
        return 'fa-palette';
      case 'backend':
        return 'fa-server';
      case 'database':
        return 'fa-database';
      case 'tools':
        return 'fa-tools';
      default:
        return 'fa-code';
    }
  }
}
