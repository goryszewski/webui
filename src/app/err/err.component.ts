import { Component } from '@angular/core';

@Component({
  selector: 'app-err',
  template: `
    <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill" />
        </svg>
        <div>
            404: Page Not Found
        </div>
    </div>
  `,

})
export class ErrComponent {

}
