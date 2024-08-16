import { Component, HostListener, Renderer2 } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
   initFlowbite();
  }
}
