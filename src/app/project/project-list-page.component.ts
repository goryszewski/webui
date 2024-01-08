import { Component, inject } from '@angular/core';
import { Project } from './model/Project';
import { NgFor, NgIf } from '@angular/common';
import { ComponentListState, LIST_STATE_VALUE } from '../utils/list-state.type';
import { SubmitTextComponent } from '@ui/submit-text.component';
import { ProjectsApiService } from './data-access/projects.api.service';

@Component({
  selector: 'app-project-list-page',
  standalone: true,
  imports: [SubmitTextComponent, NgIf, NgFor],
  template: `
    <p>Projects:</p>
    <app-submit-text
      (submitText)="
        listState.state === listStateValue.SUCCESS &&
          addProject($event, listState.results)
      "
    />
  `,
  styles: ``,
})
export class ProjectListPageComponent {
  addProject($event: string, arg1: Project[]) {
    throw new Error('Method not implemented.');
  }
  private projectsApiService = inject(ProjectsApiService);
  listState: ComponentListState<Project> = { state: LIST_STATE_VALUE.IDLE };
  listStateValue = LIST_STATE_VALUE;
}
