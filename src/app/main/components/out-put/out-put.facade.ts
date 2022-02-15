import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherService } from '../../shared/services/weather.service';

@Injectable()
export class OutPutFacade {
  cityInfo$ = new BehaviorSubject<any>([]);
  constructor(private weatherService: WeatherService) {}
  public get cityInfo(): Observable<any> {
    return this.cityInfo$.asObservable();
  }
  public set setCityInfo(info: any) {
    let feelsLike = info['main']['feels_like'];
    let temp = info['main']['temp'];
    let humidity = info['main']['humidity'];
    let temp_min = info['main']['temp_min'];
    let temp_max = info['main']['temp_max'];
    let data = {
      feelsLike,
      temp,
      humidity,
      temp_min,
      temp_max,
    };
    this.cityInfo$.next(data);
  }

  onGetWeatherInfo(cityName: string) {
    this.weatherService.onGetWeather(cityName).subscribe((cityInfo) => {
      this.setCityInfo = cityInfo;
    });
  }
}
