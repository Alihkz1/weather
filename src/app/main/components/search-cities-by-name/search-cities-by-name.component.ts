import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-search-cities-by-name',
  templateUrl: './search-cities-by-name.component.html',
  styleUrls: ['./search-cities-by-name.component.scss'],
})
export class SearchCitiesByNameComponent implements OnInit {
  flag = false;
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
    private router: Router,
    private snack: MatSnackBar,
    private weatherService: WeatherService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SearchCitiesByNameComponent>
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    this.flag = true;
    if (!this.input.valid) return;
    this.weatherService.onGetWeather(this.model.cityName).subscribe(
      (cityInfo) => {
        this.weatherService.setCityInfo = cityInfo;
        setTimeout(() => {
          this.snack.open('success', 'ok', {
            duration: 1000,
          });
          this.router.navigate(['outPut']);
          this.flag = false;
          this.dialogRef.close();
        }, 1000);
      },
      (error) => {
        this.error = true;
        this.snack.open('fail ! please enter correct name', 'ok', {
          duration: 1500,
        });
        this.flag = false;
      }
    );
  }
}
