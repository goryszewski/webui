import { Component } from "@angular/core";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrl: './container.component.css'
})
export class ContainerComponent {
    test: number = 122;
    testemit: string = ""
    testemitF(data: string) {
        this.testemit = data
    }
}
