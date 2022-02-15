import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from '../../shared/services/weather.service';
import { OutPutFacade } from '../out-put/out-put.facade';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  flag = false;
  input = new FormGroup({});

  model = {
    cityName: 'cityName',
  };

  fields: FormlyFieldConfig[] = [
    {
      className: 'flex-25 padding-10',
      key: 'cityName',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'city name',
        placeholder: 'Enter your User name',
        required: true,
      },
    },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<InputComponent>,
    private weatherService: WeatherService,
    private outPutFacade: OutPutFacade,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    if (!this.input.valid) return;
    this.weatherService
      .onGetWeather(this.model.cityName)
      .subscribe((cityInfo) => {
        this.outPutFacade.setCityInfo = cityInfo;
        this.flag = true;
      });
    this.dialogRef.close();
    this.router.navigate(['outPut']);
  }
}
