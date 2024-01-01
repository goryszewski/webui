import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div>
      {{ title }}
      <app-container></app-container>
    </div>
  `,
  styles:[]
})
export class AppComponent {
  link = environment.link;
  title = environment.title;
}
