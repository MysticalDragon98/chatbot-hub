import { Pipe, PipeTransform } from '@angular/core';
import formatPhoneNumberToReadable from 'src/modules/utils/formatPhoneNumberToReadable';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return formatPhoneNumberToReadable(value);
  }

}
