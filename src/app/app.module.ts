import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactMeComponent,
    HomeComponent,
    LoaderComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
