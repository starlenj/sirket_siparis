import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppLoginService } from "src/app/service/app.login.service";
import { AppConfig } from "../enum/app.config.enum";

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AppLoginService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token: string = window.localStorage.getItem(AppConfig.AUTH_TOKEN) || "";
    if (token) {
      this.authService.checkToken().subscribe((response) => {
        if (response.error) {
          console.log(response.error);
          this.router.navigate(["/auth"]);
        }
      });
      return true;
    }
    // if has a token check it
    this.router.navigate(["/auth"]);
    return false;
  }

}
