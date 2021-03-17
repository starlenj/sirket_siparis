import { Injector, Type } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { BaseInjector } from "../injector/base-injector";
import { HmbrgrProductService } from "src/app/services/hmbrgr.product.service";
import { HmbrgrUrl } from "../enum/hmbrgr.url";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";


export abstract class HmbrgrBaseComponent {

  public constructor() {
    this.injector = BaseInjector.getInjector();
    this.productService = this.injector.get<HmbrgrProductService>(
      HmbrgrProductService as Type<HmbrgrProductService>
    );
    this.formBuilder = this.injector.get<FormBuilder>(
      FormBuilder as Type<FormBuilder>
    );
    this.router = this.injector.get<Router>(Router as Type<Router>);
  }
  private injector: Injector;
  protected productService;
  protected router: Router;
  protected AppState: AppState;
  protected formBuilder: FormBuilder;
  public navigate(
    orderNavigate: HmbrgrUrl | string,
    params?: Record<string, unknown>
  ): void {
    const url: string = orderNavigate;

    if (params !== undefined) {
      this.router
        .navigate([url], params)
        .then()
        .catch((reason) => {
          throw reason;
        });
    } else {
      this.router
        .navigate([url])
        .then()
        .catch((reason) => {
          throw reason;
        });
    }
  }
}
