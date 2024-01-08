import { Component, ElementRef } from '@angular/core';
import { TaskListPageComponent } from './task/task-list-page.component';
import { ProjectListPageComponent } from './project/project-list-page.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskListPageComponent,
    ProjectListPageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <h1 class="text-orange-500 uppercase py-4 text-2xl text-center">
      Application Todo list
    </h1>
    <nav class=" bg-orange-400">
      <ul class="flex gap-6">
        <li><a routerLinkActive="font-bold" routerLink="/projects">Projekts</a></li>
        <li><a routerLinkActive="font-bold" routerLink="/tasks">Tasks</a></li>
      </ul>
    </nav>
    <main class="grid pt-4">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {}
