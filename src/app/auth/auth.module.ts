import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoreModule } from '../core/core.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CoreModule, SharedModule, PrimeNgModule, AuthRoutingModule],
})
export class AuthModule {}
