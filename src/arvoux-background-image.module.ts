import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackgroundImageDirective} from "./background-image";

@NgModule({
  declarations: [BackgroundImageDirective],
  imports: [CommonModule],
  exports: [BackgroundImageDirective]
})
export class ArvouxBackgroundImageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ArvouxBackgroundImageModule
    };
  }
}
