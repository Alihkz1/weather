import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cityInfo$ = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  public get cityInfo(): Observable<any> {
    return this.cityInfo$.asObservable();
  }
  public set setCityInfo(info: any) {
    let name = info['name'];
    let cityInfo = info['main'];
    let temp = cityInfo['temp'];
    let humidity = cityInfo['humidity'];
    let temp_min = cityInfo['temp_min'];
    let temp_max = cityInfo['temp_max'];
    let feelsLike = cityInfo['feels_like'];
    let data = { name, feelsLike, temp, humidity, temp_min, temp_max };
    this.cityInfo$.next(data);
  }

  public onGetWeatherInfo(cityName: string) {
    this.onGetWeather(cityName).subscribe((cityInfo) => {
      this.setCityInfo = cityInfo;
    });
  }

  public onGetWeather(cityName: string) {
    let apiKey = 'cb2201a199894daaf5cd664edb1f49ae';
    let base = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let url: string = base + cityName + '&limit=5&appid=' + apiKey;
    return this.http.get(url);
  }
}
