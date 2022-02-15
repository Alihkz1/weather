import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
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
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    if (!this.input.valid) return;
    this.weatherService
      .onGetWeather(this.model.cityName)
      .subscribe((result) => {
        console.log(result);
      });
    this.dialogRef.close();
  }
}
