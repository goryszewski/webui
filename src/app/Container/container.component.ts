import { Component } from "@angular/core";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrl: './container.component.css'
})
export class ContainerComponent {
    test: number = 122;
    testemit: number = 0
    testemitF(data: number) {
        this.testemit = data
    }
}
