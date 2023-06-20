import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './resume/about-me/about-me.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { ContactMeComponent } from './resume/contact-me/contact-me.component';
import { HomeComponent } from './resume/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { LoaderComponent } from './loader/loader.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './projects/charts/charts.component';
import { TodoComponent } from './projects/todo/todo.component';
import { ServicesComponent } from './resume/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    HomeComponent,
    LoaderComponent,
    SkillsComponent,
    ExperienceComponent,
    ChartsComponent,
    TodoComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
