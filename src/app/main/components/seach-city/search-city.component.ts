import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
})
export class SeachCityComponent implements OnInit {
  public pending = false;
  public error = false;
  public input = new FormGroup({});

  model = {
    cityName: '',
  };

  fields: FormlyFieldConfig[] = [
    {
      className: 'flex-25 padding-10',
      key: 'cityName',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'city name',
        placeholder: 'Enter city name',
        required: true,
      },
    },
  ];

  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private weatherService: WeatherService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SeachCityComponent>
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    this.pending = true;
    if (!this.input.valid) return;
    this.weatherService.onGetWeather(this.model.cityName).subscribe(
      (cityInfo: any) => {
        if (!cityInfo) return;
        this.weatherService.setCityInfo = cityInfo;
        this.onSuccess();
      },
      (error: any) => {
        if (!error) return;
        this.onError();
      }
    );
  }

  private onSuccess() {
    setTimeout(() => {
      this.snack.open('success', 'ok', {
        duration: 1000,
      });
      this.router.navigate(['show-city-weather']);
      this.pending = false;
      this.dialogRef.close();
    }, 1000);
  }

  private onError() {
    this.error = true;
    this.snack.open('fail ! please enter correct name', 'ok', {
      duration: 1500,
    });
    this.pending = false;
  }
}
