import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BaseComponent } from './components/base/base.component';
import { SquareLoaderComponent } from './components/loaders/square-loader/square-loader.component';
import { ImageResolverPipe } from './pipes/image-resolver.pipe';
import { BackToComponent } from './components/buttons/back-to/back-to.component';

@NgModule({
  declarations: [BaseComponent, SquareLoaderComponent, ImageResolverPipe, BackToComponent],
  imports: [CoreModule],
  exports: [SquareLoaderComponent, BackToComponent],
})
export class SharedModule {}
