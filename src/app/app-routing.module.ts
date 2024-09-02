import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './resume/home/home.component';
import { BookACallComponent } from './resume/book-a-call/book-a-call.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookACallComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'all-projects', component: AllProjectsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
