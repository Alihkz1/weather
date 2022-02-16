import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public onGetWeather(cityName: string) {
    let base = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let apiKey = 'cb2201a199894daaf5cd664edb1f49ae';
    let url: string = base + cityName + '&limit=5&appid=' + apiKey;
    return this.http.get(url);
  }
}
