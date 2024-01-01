import { Component } from "@angular/core";

@Component({
    selector: 'app-container',
    template: `
        <div class="wrapper">
            <app-nav></app-nav>
            <app-notification></app-notification>
            <router-outlet>

            </router-outlet>
            <!-- <app-repos></app-repos>
            <app-home></app-home>
            <app-products [total]="test" (testEmiter)="testemitF($event)"></app-products> -->
        </div>
    `,
    styles: [".wrapper{ margin: 0px auto; width: 820px;} "]
})
export class ContainerComponent {
    test: number = 122;
    testemit: number = 0
    testemitF(data: number) {
        this.testemit = data
    }
}
