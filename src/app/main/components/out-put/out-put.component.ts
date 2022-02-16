import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OutPutFacade } from './out-put.facade';

@Component({
  selector: 'app-out-put',
  templateUrl: './out-put.component.html',
  styleUrls: ['./out-put.component.scss'],
})
export class OutPutComponent implements OnInit {
  name = '';
  feelsLike = 0;
  humidity = 0;
  temp = 0;
  max = 0;
  min = 0;
  constructor(private outPutFacade: OutPutFacade, private router: Router) {}

  ngOnInit(): void {
    this.onGetCityInfo();
  }

  public onTryAgain() {
    this.router.navigate(['/main']);
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
    this.outPutFacade.cityInfo.subscribe((info) => {
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
