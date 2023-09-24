import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    TagModule,
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    TagModule,
  ],
})
export class PrimeNgModule {}
