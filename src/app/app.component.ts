import { Component, ElementRef, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { TaskListPageComponent } from './task/task-list-page.component';
import { ProjectListPageComponent } from './project/project-list-page.component';

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
    <nav class="bg-orange-300 py-4">
      <ul class="flex gap-6">
        <li>
          <a
            routerLink="/tasks"
            routerLinkActive="font-bold"
            [routerLinkActiveOptions]="{ exact: true }"
            >Tasks</a
          >
        </li>
        <li><a routerLink="/projects" routerLinkActive="font-bold">Projects (0)</a></li>
        <li>
          <a routerLink="/images" routerLinkActive="font-bold">images (0)</a>
        </li>
        <li>
          <a routerLink="/mtasks" routerLinkActive="font-bold">mtasks (0)</a>
        </li>
        <li>
          <a routerLink="/vm" routerLinkActive="font-bold">vm (0)</a>
        </li>
        <li class="ml-auto">
          <a routerLink="/tasks/urgent" routerLinkActive="font-bold">Ważne (0)</a>
        </li>
      </ul>
    </nav>
    <main class="grid pt-4">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main,
      nav {
        @apply px-12;
      }
    `,
  ],
})
export class AppComponent {
  private router = inject(Router);

  goToProjects() {}
}
