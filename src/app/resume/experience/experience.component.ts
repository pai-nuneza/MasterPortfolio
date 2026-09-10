import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  showFullHistory = false;

  experiences = [
    {
      company: 'Codev',
      position: 'Senior Software Developer',
      date: 'Mar 2024 - Present',
      location: 'International team',
      description: 'IPR management platform for patents, trademarks, copyrights, renewals, due dates, and official fee workflows.',
      highlights: [
        'Build C#/.NET backend features for official fee calculation, due date calculation, validation rules, and IP-related business logic.',
        'Develop Vue.js frontend features and maintain PHP applications built with Slim and Blade templates.',
        'Use GitHub Copilot and ChatGPT to support code analysis, debugging, documentation review, and test-case preparation.',
      ],
      companyWebsite: 'https://www.codev.com/',
      skills: ['C#', '.NET', 'Vue.js', 'PHP', 'Slim', 'Blade', 'Agile'],
    },
    {
      company: 'Contract / Freelance',
      position: 'Technical Lead Developer',
      date: 'Sept 2022 - Jan 2024',
      location: 'Remote',
      description: 'Led a small team rebuilding a legacy FoxPro desktop system into a PHP/MySQL web application.',
      highlights: [
        'Led 4 developers, managed tasks, reviewed pull requests, and guided technical decisions throughout the project.',
        'Designed the new relational MySQL database and mapped legacy FoxPro data into the new schema.',
        'Built a C# WPF migration tool to convert FoxPro DBF files into MySQL relational tables.',
        'Coordinated with the project manager and joined client meetings to clarify requirements and align priorities.',
      ],
      skills: ['PHP', 'MySQL', 'C#', 'WPF', 'FoxPro', 'DBF Migration', 'Team Leadership'],
    },
    {
      company: 'Unient',
      position: 'Senior Application Specialist',
      date: 'Feb 2021 - Mar 2024',
      location: 'Cebu, Philippines',
      description: 'Developed terminal operations systems and internal workflow tools for Australian clients and company teams.',
      highlights: [
        'Built C# and Angular features for terminal operations workflows, including integrations with Navis N4.',
        'Rebuilt the company website using Umbraco CMS so management could update content without developer support.',
        'Created an internal timesheet and reporting tool used by 90-100 employees, reducing reliance on subscription-based HR tools.',
        'Built a Team Configuration Management tool that helped sales estimate team cost by role, seniority, and staffing needs.',
      ],
      companyWebsite: 'https://www.unient.biz/',
      skills: ['C#', 'Angular', 'Umbraco', 'SQL Server', 'Navis N4', 'Reporting'],
    },
    {
      company: 'Digital Excellence Group Cebu',
      position: 'Full Stack Developer',
      date: 'Jun 2020 - Jan 2021',
      location: 'Cebu, Philippines',
      description: 'Worked on Health Watch, a web application used by employees to track and report health and wellness information.',
      highlights: [
        'Built full-stack features using ASP.NET MVC, C#, JavaScript, jQuery, and Chart.js.',
        'Developed survey, reporting, and chart-based features for employee wellness data.',
        'Improved usability by fixing issues, updating screens, and supporting backend and frontend changes.',
      ],
      companyWebsite: 'http://digitalexcellencegroup.com/',
      skills: ['ASP.NET MVC', 'C#', 'JavaScript', 'jQuery', 'Chart.js', 'Bootstrap'],
    },
    {
      company: 'Alliance Software, Inc.',
      position: 'Technical Specialist II',
      date: 'Nov 2018 - May 2020',
      location: 'Cebu, Philippines',
      description: 'Supported and enhanced an HRIS application through feature updates, bug fixes, and production support.',
      highlights: [
        'Assessed reported issues by urgency and business impact, then worked with QA and release teams to move fixes into production.',
        'Prepared technical documentation, diagrams, and low-level design notes for feature work and project manager review.',
      ],
      companyWebsite: 'https://www.alliance.com.ph/index.html',
      skills: ['HRIS', '.NET', 'SQL Server', 'QA Support', 'Documentation'],
    },
    {
      company: 'M. Lhuillier Financial Services',
      position: 'Junior Developer',
      date: 'Sept 2015 - Nov 2018',
      location: 'Cebu, Philippines',
      description: 'Supported internal business application development for nationwide branch operations.',
      highlights: [
        'Worked on C#, ASP.NET MVC, jQuery, and Bootstrap while supporting internal business systems.',
        'Helped build an Online Request Application for nationwide branch supply, equipment, and business requests.',
        'Moved paper-based branch requests into an online approval workflow for branch managers, regional managers, and other approvers.',
      ],
      companyWebsite: 'https://mlhuillier.com/',
      skills: ['C#', 'ASP.NET MVC', 'jQuery', 'Bootstrap', 'SQL Server', 'Workflow Systems'],
    },
    {
      company: 'Freelance Project Support',
      position: 'PHP / CodeIgniter Developer',
      date: 'Additional project work',
      location: 'Belgium-based client',
      description: 'Support a task-based food and beverage management project when development tasks are available.',
      highlights: [
        'Handle PHP/CodeIgniter development tasks for a food and beverage management application.',
      ],
      skills: ['PHP', 'CodeIgniter', 'Task-Based Development'],
    },
  ];

  get featuredExperiences() {
    return this.experiences.slice(0, 3);
  }

  get historyExperiences() {
    return this.experiences.slice(3);
  }

  get visibleHistoryExperiences() {
    return this.showFullHistory ? this.historyExperiences : this.historyExperiences.slice(0, 2);
  }

  toggleHistory() {
    this.showFullHistory = !this.showFullHistory;
  }
}
