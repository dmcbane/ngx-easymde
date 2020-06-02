import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { EasymdeComponent } from './component';
import { EasymdeConfig } from './config';

@NgModule({
  imports: [CommonModule],
  declarations: [EasymdeComponent],
  exports: [EasymdeComponent],
})
export class EasymdeModule {
  static forRoot(config?: EasymdeConfig): ModuleWithProviders<EasymdeModule> {
    return {
      ngModule: EasymdeModule,
      providers: [{ provide: EasymdeConfig, useValue: config }],
    };
  }
}
