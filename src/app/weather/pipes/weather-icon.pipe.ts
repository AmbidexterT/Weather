import { Pipe, PipeTransform } from '@angular/core';
import { weatherIconCodes } from "../../utils/weather-codes";

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  transform(value?: number): string {
    return weatherIconCodes[value || 0];
  }
}
