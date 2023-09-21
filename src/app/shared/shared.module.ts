import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BaseComponent } from './components/base/base.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [CoreModule, PrimeNgModule],
})
export class SharedModule {}
