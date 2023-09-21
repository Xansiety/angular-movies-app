import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [ CoreModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
