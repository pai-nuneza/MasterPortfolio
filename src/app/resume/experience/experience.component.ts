import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Codev',
      position: 'Senior Software Developer',
      date: 'March 2024 - Presdent',
      description:
        'Built and deployed distributed web apps with Azure DevOps CI/CD, developed backend services in C# .NET and PHP, and improved front-end performance with Angular and Vue.js. Collaborated in Agile teams, upheld code quality, and explored AI solutions through prompt engineering.',
      companyWebsite: 'https://www.codev.com/',
      skills: ['C#', 'PHP', '.NET Core', 'Vue', 'SQL Server', 'REST APIs'],
    },
    {
      company: 'Unient',
      position: 'Fullstack Developer',
      date: 'Feb 2021 - February 2024',
      description:
        'Leading full-stack development initiatives, implementing new features and resolving critical issues. Collaborate closely with cross-functional teams to deliver high-quality, efficient solutions. Conduct comprehensive code reviews and mentor team members on best practices and modern development standards.',
      companyWebsite: 'https://www.unient.biz/',
      skills: [
        'C#',
        '.NET Core',
        'Angular',
        'SQL Server',
        'Azure',
        'REST APIs',
      ],
    },
    {
      company: 'Symon Systems',
      position: 'Senior Developer',
      date: 'Feb 2021 - May 2023',
      description:
        'Led end-to-end feature development from concept to deployment. Performed rigorous code reviews and comprehensive testing to ensure software quality. Maintained strong client relationships through effective communication and timely project delivery.',
      companyWebsite: 'http://3.0.204.178/#url',
      skills: ['ASP.NET', 'Angular', 'SQL', 'Git', 'Agile', 'Team Leadership'],
    },
    {
      company: 'Digital Excellence',
      position: 'Fullstack Developer',
      date: 'Jun 2020 - Jan 2021',
      description:
        'Collaborated with cross-functional teams including designers, QA, and product managers. Analyzed and translated business requirements into technical specifications. Maintained detailed documentation and ensured clear client communication for successful project outcomes.',
      companyWebsite: 'http://digitalexcellencegroup.com/',
      skills: ['C#', 'Angular', 'Bootstrap', 'MySQL', 'API Development'],
    },
    {
      company: 'Alliance Software',
      position: 'Software Engineer',
      date: 'Nov 2018 - May 2020',
      description:
        'Developed and maintained enterprise web applications. Implemented new features based on client requirements and resolved technical issues promptly. Collaborated with stakeholders to ensure client satisfaction and project success.',
      companyWebsite: 'https://www.alliance.com.ph/index.html',
      skills: ['.NET Framework', 'JavaScript', 'SQL Server', 'Web Services'],
    },
    {
      company: 'Mlhuillier Financial Services',
      position: 'Programmer',
      date: 'Sep 2015 - Nov 2018',
      description:
        'Contributed to financial system projects as a developer. Involved in complete web application development lifecycle including UI/UX design, database architecture, back-end development, comprehensive testing, and production deployment support.',
      companyWebsite: 'https://mlhuillier.com/',
      skills: ['ASP.NET', 'C#', 'MSSQL', 'jQuery', 'CSS'],
    },
  ];

  ngOnInit() {}

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
