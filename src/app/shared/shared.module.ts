import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
