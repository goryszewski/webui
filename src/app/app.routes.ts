import { Routes } from '@angular/router';
import { ProjectListPageComponent } from './project/project-list-page.component';
import { TaskListPageComponent } from './task/task-list-page.component';
import { E404Component } from './e404.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'projects',
    component: ProjectListPageComponent,
  },
  { path: 'tasks', component: TaskListPageComponent },
  {
    path: '**',
    component: E404Component,
  },
];
