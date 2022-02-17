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
    let feelsLike = info['main']['feels_like'];
    let temp = info['main']['temp'];
    let humidity = info['main']['humidity'];
    let temp_min = info['main']['temp_min'];
    let temp_max = info['main']['temp_max'];
    let data = { name, feelsLike, temp, humidity, temp_min, temp_max };
    this.cityInfo$.next(data);
  }

  onGetWeatherInfo(cityName: string) {
    this.onGetWeather(cityName).subscribe((cityInfo) => {
      this.setCityInfo = cityInfo;
    });
  }

  public onGetWeather(cityName: string) {
    let base = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let apiKey = 'cb2201a199894daaf5cd664edb1f49ae';
    let url: string = base + cityName + '&limit=5&appid=' + apiKey;
    return this.http.get(url);
  }
}
