import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WeatherService } from '../../shared/services/weather.service';
import { SeachCityComponent } from '../seach-city/search-city.component';

@Component({
  selector: 'app-show-city-weather',
  templateUrl: './show-city-weather.component.html',
  styleUrls: ['./show-city-weather.component.scss'],
})
export class ShowCityWeatherComponent implements OnInit {
  public name: string = '';
  public feelsLike: number = 0;
  public humidity: number = 0;
  public temp: number = 0;
  public max: number = 0;
  public min: number = 0;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.onGetCityInfo();
  }

  public onTryAgain() {
    this.dialog.open(SeachCityComponent, { height: '30%', width: '80%' });
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
    this.weatherService.cityInfo.subscribe((relatedCityInfo) => {
      if (relatedCityInfo.length == 0) this.router.navigate(['/main']);
      relatedCityInfo = this.onConvertInfo(relatedCityInfo);
      this.name = relatedCityInfo?.name;
      this.feelsLike = relatedCityInfo?.feelsLike;
      this.humidity = relatedCityInfo?.humidity;
      this.temp = relatedCityInfo?.temp;
      this.max = relatedCityInfo?.max;
      this.min = relatedCityInfo?.min;
    });
  }
}
