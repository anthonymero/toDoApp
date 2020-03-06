import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';


const appRoutes: Route[] = [
  {
    path: 'tasks',
    // canActivate: [AuthGuard],
    component: TasksComponent,
  },
  {
    path: '',
    component: TasksComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
