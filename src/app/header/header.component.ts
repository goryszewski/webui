import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  slogan: string = "Just do it"
  logo: string = "/assets/45927807.png"

  getSlogan() {
    return "Just do it"
  }
}
