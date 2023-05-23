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
    },
    {
      company: 'Symon Systems',
      position: 'Senior Developer Consultant',
      date: 'Feb 2021 - May 2023',
      description: '',
    },
    {
      company: 'Digital Excellence Group',
      position: 'Fullstack Developer',
      date: 'June 2020 - Jan 2021',
      description: '',
    },
    {
      company: 'Alliance Software',
      position: 'Technical Specialist II Developer',
      date: 'Nov 2018 - May 2020',
      description: '',
    },
    {
      company: 'Mlhuillier Financial Services',
      position: 'Programmer II',
      date: 'Sep 2015 - Nov. 2018',
      description: '',
    }
  ]
}
