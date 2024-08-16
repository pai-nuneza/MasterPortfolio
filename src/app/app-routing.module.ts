import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './projects/charts/charts.component';
import { HomeComponent } from './resume/home/home.component';
import { TodoComponent } from './projects/todo/todo.component';
import { BookACallComponent } from './resume/book-a-call/book-a-call.component';
import { ExperienceComponent } from './resume/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'book', component: BookACallComponent },
  { path: 'experience', component: ExperienceComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
