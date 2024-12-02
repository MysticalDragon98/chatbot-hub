import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapsURL'
})
export class MapsURLPipe implements PipeTransform {

  transform(value: number, ...args: [number]): unknown {
    return `https://www.google.com/maps/search/?api=1&query=${value}`;
  }

}
