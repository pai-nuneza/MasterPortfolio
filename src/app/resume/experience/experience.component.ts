import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'Unient - Remote',
      position: 'Fullstack Developer',
      date: 'Feb 2021 - Present',
      description: 'Develop enhancements and fixed issues. Worked closely with my team to deliver efficient and high-quality solutions. Conducted code reviews and promoted best practices.',
      companyWebsite: 'https://www.unient.biz/',
    },
    {
      company: 'Symon Systems - Remote',
      position: 'Senior Developer',
      date: 'Feb 2021 - May 2023',
      description: 'I led feature development, conducted code reviews and testing, and maintained client communication for successful software delivery.',
      companyWebsite: 'http://3.0.204.178/#url',
    },
    {
      company: 'Digital Excellence - Remote',
      position: 'Fullstack Developer',
      date: 'Jun 2020 - Jan 2021',
      description: 'Facilitated collaboration with cross-functional teams, analyzed requirements, documented meticulously, and ensured effective client communication for exceptional results.',
      companyWebsite: 'http://digitalexcellencegroup.com/',
    },
    {
      company: 'Alliance Software - Onsite',
      position: 'Software Engineer',
      date: 'Nov 2018 - May 2020',
      description: 'Collaborated, implemented, resolved, ensured client satisfaction. Communicated, documented for software development.',
      companyWebsite: 'https://www.alliance.com.ph/index.html',
    },
    {
      company: 'Mlhuillier Financial Services - Onsite',
      position: 'Programmer',
      date: 'Sep 2015 - Nov. 2018',
      description: 'Contributed to financial system projects as a junior developer. Involved in web app development, including UI/UX planning, database design, back-end structuring, testing, and successful deployment support.',
      companyWebsite: 'https://mlhuillier.com/',
    }
  ]

  ngOnInit() {

  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
