import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="navbar">
      <div class="site-name">
          <h2>{{ sitename }}</h2>
      </div>
      <div class="site-menu">
          <a [routerLinkActive]="['active','class2']" routerLink="" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a [routerLinkActive]="'active'" [routerLink]="['Api',10]">APIPY</a>
          <a [routerLinkActive]="'active'" [routerLink]="'Images'" (click)="onClick(false)">REPO</a>
          <!-- <div [hidden]="display" (click)="onClick(true)"> ELO</div> -->

      </div>
    </div>
  `,
  styles: [".navbar {display: flex;background-color: wheat;}",".site-name {padding: 5px 30px;color: black;}",".site-menu {padding: 10px 30px;margin-left: 100px;}","a {text-decoration: none;color: blue;margin: 0px 10px;}",".active {background-color: brown;}",".class2 {color: aliceblue;}"
]
})
export class NavComponent {
  display = false;
  sitename = "WEB ui REGISTRY"
  onClick(value: boolean) {
    console.log("NAV:001: click:" + value);
    this.display = value;

  }
}
