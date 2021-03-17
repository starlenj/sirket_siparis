import { Injector } from '@angular/core';

/**
 * This injector class is used to inject custom services into coreInjector.
 */
export class BaseInjector {
  /**
   * static injector instance is used to create singleton instance
   */
  private static coreInjector: Injector;

  /**
   * This is where we set the injector instance
   * @param {Injector} injector
   */
  public static setInjector(injector: Injector): void {
    BaseInjector.coreInjector = injector;
  }

  /**
   * It returns custom injector
   * @returns {Injector}
   */
  public static getInjector(): Injector {
    return BaseInjector.coreInjector;
  }
}
