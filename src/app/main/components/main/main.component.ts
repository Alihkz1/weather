import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  input = new FormGroup({});
  model = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'User Name',
        placeholder: 'Enter your User name',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'password',
        type: 'password',
        placeholder: 'at least 8 characters',
        required: true,
      },
    },
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'First Name',
        placeholder: 'Enter your First name',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'last Name',
        type: 'name',
        placeholder: 'Enter your last name',
        required: true,
      },
    },
    {
      key: 'phoneNumber',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'phone Number',
        type: 'tel',
        placeholder: 'Enter your phone number',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'email Adress',
        type: 'email',
        placeholder: 'example@email.com',
        required: true,
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
