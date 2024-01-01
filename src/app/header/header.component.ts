import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="header">
    <div class="site-image">
        <img [src]="logo" height="240" width="320">
    </div>
    <div class="site-slogan">
        <h2>{{getSlogan()}}</h2>
    </div>
  </div>
  `,
  styles: ['.header{height: 280px;padding: 30px 40px;display: flex;background-color: grey;}','.site-slogan{width: 420px;margin-left: 50px;text-align: center;}','h2{font-size: 45px;}']
})
export class HeaderComponent {

  slogan: string = "Just do it"
  logo: string = "/assets/45927807.png"

  getSlogan() {
    return "Just do it"
  }
}
