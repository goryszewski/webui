import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  display = false;
  sitename = "WEB ui REGISTRY"
  onClick(value: boolean) {
    console.log("NAV:001: click:" + value);
    this.display = value;

  }
}
