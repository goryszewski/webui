import { Routes } from '@angular/router';
import { ProjectListPageComponent } from './project/project-list-page.component';
import { TaskListPageComponent } from './task/task-list-page.component';
import { E404Component } from './e404.component';
import { ImageListPageComponent } from './image/image-list-page.component';

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
  {
    path: 'images',
    component: ImageListPageComponent,
  },
  {
    path: 'tasks',
    children: [
      { path: '', component: TaskListPageComponent },
      {
        path: 'urgent',
        component: TaskListPageComponent,
        data: {
          urgent: true,
        },
      },
      { path: ':projectId', component: TaskListPageComponent },
    ],
  },
  {
    path: '**',
    component: E404Component,
  },
];
