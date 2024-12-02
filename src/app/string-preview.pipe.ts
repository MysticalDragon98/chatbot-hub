import { Pipe, PipeTransform } from '@angular/core';
import formatMessagePreview from 'src/modules/utils/formatMessagePreview';

@Pipe({
  name: 'stringPreview'
})
export class StringPreviewPipe implements PipeTransform {

  transform(value: string, ...args: [number?]): string {
    return formatMessagePreview(value, args[0] || 10);
  }

}
