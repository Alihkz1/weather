import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WeatherService } from '../../shared/services/weather.service';
import { SearchCitiesByNameComponent } from '../search-cities-by-name/search-cities-by-name.component';

@Component({
  selector: 'app-show-cities-weather-info',
  templateUrl: './show-cities-weather-info.component.html',
  styleUrls: ['./show-cities-weather-info.component.scss'],
})
export class ShowCitiesWeatherInfoComponent implements OnInit {
  name: string = '';
  feelsLike: number = 0;
  humidity: number = 0;
  temp: number = 0;
  max: number = 0;
  min: number = 0;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.onGetCityInfo();
  }

  public onTryAgain() {
    this.dialog.open(SearchCitiesByNameComponent, {
      height: '30%',
      width: '80%',
    });
  }

  private onConvertInfo(info: any) {
    info = {
      ...info,
      feelsLike: Number((info?.feelsLike - 272.25)?.toFixed(0)),
      temp: Number((info?.temp - 272.25)?.toFixed(0)),
      max: Number((info?.temp_max - 272.25)?.toFixed(0)),
      min: Number((info?.temp_min - 272.25)?.toFixed(0)),
    };
    return info;
  }

  private onGetCityInfo() {
    this.weatherService.cityInfo.subscribe((info) => {
      if (info.length == 0) this.router.navigate(['/main']);
      info = this.onConvertInfo(info);
      this.name = info?.name;
      this.feelsLike = info?.feelsLike;
      this.humidity = info?.humidity;
      this.temp = info?.temp;
      this.max = info?.max;
      this.min = info?.min;
    });
  }
}
