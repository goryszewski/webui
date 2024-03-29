import { Routes } from '@angular/router';
import { ProjectListPageComponent } from './project/project-list-page.component';
import { TaskListPageComponent } from './task/task-list-page.component';
import { E404Component } from './e404.component';
import { ImageListPageComponent } from './image/image-list-page.component';
import { MtaskListPageComponent } from './mtask/mtask-list-page.component';

import { VirtualMachineListPageComponent } from './vm/vm-list-page.component';

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
    path: 'vm',
    component: VirtualMachineListPageComponent,
  },
  {
    path: 'images',
    component: ImageListPageComponent,
  },
  {
    path: 'mtasks',
    component: MtaskListPageComponent,
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
