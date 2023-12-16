import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { WeatherItem } from "../_xstate/weather-machine.schema";

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailsComponent {
  @Input() list: WeatherItem[] = []
  @Input() currentDay?: string;
  @Input() mode: 'day' | 'time' = 'day';
  @Output() selected = new EventEmitter<WeatherItem>();

  setCurrentItem(day: WeatherItem) {
    if (this.mode === 'day') {
      this.selected.next(day);
    }
  }
}
