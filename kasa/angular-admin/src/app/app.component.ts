import { Component, OnInit, ViewChild } from '@angular/core';
import { AppLoginService } from './service/app.login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn: boolean = false;


  constructor(private loginService: AppLoginService) { }

  ngAfterViewInit() {
    this.loginService.checkToken().subscribe((response) => {
      response.data.id !== undefined ? this.userLoggedIn = true : false;
    })
  }
}
