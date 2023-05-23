import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'Unient',
      position: 'Fullstack Developer',
      date: 'Feb 2021 - May 2023',
      description: 'Involved in fixing issues and developing enhancements using technologies such as C#, Angular, and MSSQL Queries. Working closely with my team, we collaborated to ensure efficient and high-quality solutions. Additionally, I participated in code reviews, contributing to the overall codebase quality and promoting best practices within the organization.',
      imageUrl: 'assets/images/companies/unient.svg',
      companyWebsite: 'https://www.unient.biz/',
      technologies: [
        'C#', 'Jira', 'Git', 'Angular', 'Octopos Deploy', 'Azure DevOps', 'Navis N4', 'ASP.NET MVC', 'DevExpress'
      ],
    },
    {
      company: 'Symon Systems',
      position: 'Senior Developer',
      date: 'Feb 2021 - May 2023',
      description: 'I led the planning, development, and troubleshooting of new features, conducted comprehensive code reviews and testing, and maintained direct client communication to ensure the successful delivery of high-quality software.',
      imageUrl: 'assets/images/companies/symon.png',
      companyWebsite: 'http://3.0.204.178/#url',
      technologies: [
        'C#', 'WebAPI', 'Trello', 'AWS EC2', 'Elastic Beanstalk', 'Angular 14', 'Git', 'Bootstrap 3.3', 'IIS'
      ],
    },
    {
      company: 'Digital Excellence Group',
      position: 'Fullstack Developer',
      date: 'June 2020 - Jan 2021',
      description: 'I spearheaded dynamic collaboration with cross-functional development teams, leveraging my expertise in in-depth software requirement analysis and meticulous documentation, while ensuring seamless communication with clients to promptly address concerns, verify incidents, and deliver exceptional results that exceed expectations.',
      imageUrl: 'assets/images/companies/deg.jpg',
      companyWebsite: 'http://digitalexcellencegroup.com/',
      technologies: [
        'C#', 'ASP.NET WebForms', 'jQuery', 'Bootstrap 3.3', ''
      ],
    },
    {
      company: 'Alliance Software',
      position: 'Technical Specialist II Developer',
      date: 'Nov 2018 - May 2020',
      description: 'I collaborated with development teams to implement new features, resolve software issues, and ensured effective communication with clients to address concerns, verify incidents, and achieve high customer satisfaction through detailed documentation and analysis of software requirements.',
      imageUrl: 'assets/images/companies/alliance.svg',
      companyWebsite: 'https://www.alliance.com.ph/index.html',
      technologies: [
        'C#', 'AngularJs', 'jQuery', 'Bootstrap 4', 'ASP.NET MVC', 'Team Foundation Server'
      ],
    },
    {
      company: 'Mlhuillier Financial Services',
      position: 'Programmer II',
      date: 'Sep 2015 - Nov. 2018',
      description: 'I played a key role in the end-to-end development and support of web application systems, encompassing UI/UX planning, database design, and back-end structuring patterns, while actively participating in the testing phase and ensuring successful deployment.',
      imageUrl: 'assets/images/companies/mlhuillier.jpg',
      companyWebsite: 'https://mlhuillier.com/',
      technologies: [
        'C#', 'ASP.NET MVC 4.5', 'WebForms', ''
      ],
    }
  ]
}
