import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  public onGetWeather(cityName: string) {
    let url: string = environment.base + cityName + environment.apiKey;
    return this.http.get(url);
  }
}
