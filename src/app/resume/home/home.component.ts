import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
