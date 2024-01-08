import { Component, inject } from '@angular/core';
import { Project } from './model/Project';
import { ComponentListState, LIST_STATE_VALUE } from '../utils/list-state.type';
import { SubmitTextComponent } from '@ui/submit-text.component';
import { ProjectsApiService } from './data-access/projects.api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list-page',
  standalone: true,
  imports: [SubmitTextComponent, RouterLink],
  template: `
    <p>Projects:</p>
    <app-submit-text
      (submitText)="
        listState.state === listStateValue.SUCCESS &&
          addProject($event, listState.results)
      "
    />
    @switch (listState.state) {
      @case (listStateValue.SUCCESS) {
        <ol class="list-decimal list-inside">
          @for (project of listState.results; track project.id) {
            <li>
              <a [routerLink]="['/tasks', project.id]">{{ project.name }}</a>
            </li>
          }
        </ol>
      }
      @case (listStateValue.ERROR) {
        {{ listState.error.message }}
      }
      @case (listStateValue.LOADING) {
        Loading...
      }
    }
  `,
  styles: ``,
})
export class ProjectListPageComponent {
  addProject($event: string, arg1: Project[]) {
    this.projectsApiService.add($event).subscribe({
      next: (res) => {
        console.log(res);
        this.listState = { state: LIST_STATE_VALUE.SUCCESS, results: arg1.concat(res) };
      },
    });
  }
  private projectsApiService = inject(ProjectsApiService);
  listState: ComponentListState<Project> = { state: LIST_STATE_VALUE.IDLE };
  listStateValue = LIST_STATE_VALUE;

  ngOnInit() {
    this.getAllProjects();
  }
  getAllProjects(): void {
    this.listState = { state: LIST_STATE_VALUE.LOADING };

    this.projectsApiService.getAll().subscribe({
      next: (res) => {
        this.listState = { state: LIST_STATE_VALUE.SUCCESS, results: res };
      },
    });
  }
}
