import { Pipe, PipeTransform } from '@angular/core';
import { weatherTextCodes } from '../../utils/weather-codes';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  transform(value?: number): string {
    if (value) {
        value = Math.round(value)
    }
    return value != null? (Number(value) > 0 ? '+' + value.toString() : value.toString()) : '';
  }
}
