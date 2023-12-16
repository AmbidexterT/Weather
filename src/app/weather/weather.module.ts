import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WeatherComponent } from "./weather/weather.component";
import { SharedModule } from "@shared/shared.module";
import { WeatherMachine } from "./_xstate/weather-machine.service";
import { weatherTextPipe } from './pipes/weather-text.pipe';
import { WeatherDetailsComponent } from './weather-item/weather-item.component';
import { FilterByDatePipe } from './pipes/filter-by-date.pipe';
import { WeatherService } from "./services/weather.service";
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
  declarations: [
    WeatherComponent,
    weatherTextPipe,
    WeatherDetailsComponent,
    FilterByDatePipe,
    WeatherIconPipe,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [WeatherMachine, WeatherService],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule {}
