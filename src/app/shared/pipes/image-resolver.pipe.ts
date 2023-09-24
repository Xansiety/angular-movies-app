import { Pipe, PipeTransform } from '@angular/core';
import { endpoints } from '../../api/api.config';

@Pipe({
  name: 'imageResolver'
})
export class ImageResolverPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return endpoints.images.posterOriginal + value;
  }

}
