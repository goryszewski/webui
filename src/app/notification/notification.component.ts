import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success " hidden><p>{{nn}}This website uses cookies</p></div>`,
  styles: []
})
export class NotificationComponent implements OnInit {

  nn = "INFO:"
  ngOnInit(): void {
    console.log("init")
  }
}
