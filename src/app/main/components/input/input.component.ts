import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private dialogRef: MatDialogRef<InputComponent>,
    private weatherService: WeatherService,
    private outPutFacade: OutPutFacade,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    this.flag = true;
    if (!this.input.valid) return;
    this.weatherService.onGetWeather(this.model.cityName).subscribe(
      (cityInfo) => {
        this.outPutFacade.setCityInfo = cityInfo;
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
