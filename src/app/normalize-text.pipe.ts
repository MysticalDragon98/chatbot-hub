import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeText'
})
export class NormalizeTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value
      .replace(/\</g, '&lt;')
      .replace(/\n/g, '<br />');
  }

}
