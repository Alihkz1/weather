import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-seach-city',
  templateUrl: './seach-city.component.html',
  styleUrls: ['./seach-city.component.scss'],
})
export class SeachCityComponent implements OnInit {
  pending = false;
  error = false;
  input = new FormGroup({});

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SeachCityComponent>,
    private weatherService: WeatherService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    this.pending = true;
    if (!this.input.valid) return;
    this.weatherService.onGetWeather(this.model.cityName).subscribe(
      (cityInfo: any) => {
        if (!cityInfo) return;
        this.weatherService.setCityInfo = cityInfo;
        setTimeout(() => {
          this.snack.open('success', 'ok', {
            duration: 1000,
          });
          this.router.navigate(['outPut']);
          this.pending = false;
          this.dialogRef.close();
        }, 1000);
      },
      (error: any) => {
        if (error) {
          this.error = true;
          this.snack.open('fail ! please enter correct name', 'ok', {
            duration: 1500,
          });
          this.pending = false;
        }
      }
    );
  }
}
