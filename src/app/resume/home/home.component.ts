import { Component} from '@angular/core';

interface TechStack {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  techStack: TechStack[] = [
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  ];

  strings = [
    'C# Development',
    '.NET Web API',
    'Angular Development',
    'Responsive Web Design',
    'Azure DevOps',
    'Web Development',
    'Git Source Control',
    'IIS Deployments',
  ];

  openPDF(){
    fetch('/assets/resume.pdf')
    .then(response => response.blob())
    .then(blob => {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        console.log('fileReader', fileReader)
        const newTab = window.open();
        if (newTab) {
          newTab.document.write('<iframe src="' + fileReader.result + '" width="100%" height="500px"></iframe>');
        } else {
          alert('Pop-up blocked. Please allow pop-ups and try again.');
        }
      };
      fileReader.readAsDataURL(blob);
    });
  }


}
