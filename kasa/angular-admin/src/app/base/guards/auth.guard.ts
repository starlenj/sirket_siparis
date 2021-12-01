import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppConfig } from "../enum/app.config.enum";

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const token: string = window.localStorage.getItem(AppConfig.AUTH_TOKEN) || "";
      if(token) {
        return true;
      }
      // if has a token check it
      this.router.navigate(["/auth"]);
      return false;
  }

}
