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
      date: 'Feb 2021 - Present',
      description: 'Develop enhancements and fixed issues. Worked closely with my team to deliver efficient and high-quality solutions. Conducted code reviews and promoted best practices.',
      imageUrl: 'assets/images/companies/unient.svg',
      companyWebsite: 'https://www.unient.biz/',
      technologies: [
        'C#', '.NET Core', 'Git', 'Angular', 'Azure DevOps', 'Java', 'ASP.NET MVC'
      ],
    },
    {
      company: 'Symon Systems',
      position: 'Senior Developer',
      date: 'Feb 2021 - May 2023',
      description: 'I led feature development, conducted code reviews and testing, and maintained client communication for successful software delivery.',
      imageUrl: 'assets/images/companies/symon.png',
      companyWebsite: 'http://3.0.204.178/#url',
      technologies: [
        'C#', '.NET Core', 'AWS', 'Angular', 'Git', 'Bootstrap', 'IIS', 'Windows Forms'
      ],
    },
    {
      company: 'Digital Excellence',
      position: 'Fullstack Developer',
      date: 'June 2020 - Jan 2021',
      description: 'Facilitated collaboration with cross-functional teams, analyzed requirements, documented meticulously, and ensured effective client communication for exceptional results.',
      imageUrl: 'assets/images/companies/deg.jpg',
      companyWebsite: 'http://digitalexcellencegroup.com/',
      technologies: [
        'C#', 'ASP.NET WebForms', 'jQuery', 'Bootstrap 3.3', 'DeployHQ'
      ],
    },
    {
      company: 'Alliance Software',
      position: 'Software Engineer',
      date: 'Nov 2018 - May 2020',
      description: 'Collaborated with teams to implement features, resolve issues, and ensure client satisfaction. Communicated effectively, addressed concerns, and documented requirements for successful software development.',
      imageUrl: 'assets/images/companies/alliance.svg',
      companyWebsite: 'https://www.alliance.com.ph/index.html',
      technologies: [
        'C#', 'AngularJs', 'jQuery', 'ASP.NET MVC', 'TFS', 'MSSQL'
      ],
    },
    {
      company: 'Mlhuillier Financial Services',
      position: 'Programmer',
      date: 'Sep 2015 - Nov. 2018',
      description: 'Contributed to financial system projects as a junior developer. Involved in web app development, including UI/UX planning, database design, back-end structuring, testing, and successful deployment support.',
      imageUrl: 'assets/images/companies/mlhuillier.jpg',
      companyWebsite: 'https://mlhuillier.com/',
      technologies: [
        'C#', 'ASP.NET MVC 4.5', '.NET Framework', 'WebForms', 'jQuery', 'MSSQL', 'IIS'
      ],
    }
  ]

  ngOnInit() {
    this.experiences.forEach(experience => {
      this.shuffleArray(experience.technologies);
    });
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
