import { CommonModule } from '@angular/common';
import { FinderHttpInterceptor } from './finder-http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class FinderHttpModule {
  /**
   * @static
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FinderHttpModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: FinderHttpInterceptor,
          multi: true
        }
      ]
    };
  }

  /**
   * @constructor
   * @param parentModule
   */
  constructor(
    @Optional() @SkipSelf() parentModule: FinderHttpModule) { }
}
