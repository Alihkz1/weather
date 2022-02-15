import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

const MODULES = [
  FormlyModule,
  ReactiveFormsModule,
  FormlyBootstrapModule,
  FormlyModule.forRoot({ extras: { lazyRender: true } }),
];

@NgModule({
  imports: [...MODULES],
  exports: [MODULES],
})
export class FormModule {}
