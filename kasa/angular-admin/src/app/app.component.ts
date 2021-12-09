import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppLoginService } from './service/app.login.service';
import { BreakpointObserver } from "@angular/cdk/layout";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn: boolean = false;

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private route: Router ,private observer: BreakpointObserver, private loginService: AppLoginService) { }

  ngAfterViewInit() {
    this.loginService.checkToken().subscribe((response) => {
      response.data.id !== undefined ? this.userLoggedIn = true : false;
    })
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      console.log(res);
      if (res.matches) {
        this.sideNav.mode = "over";
        this.sideNav.close();
      } else {
        this.sideNav.mode = "side";
        this.sideNav.open();
      }
    });
  }

  routeNav(routeName: string): void {
      this.route.navigate([routeName]);
  }

}
