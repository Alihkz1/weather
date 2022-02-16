import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
const MODULES = [
  FormlyModule,
  ReactiveFormsModule,
  FormlyBootstrapModule,
  FormlyMaterialModule,
  FormlyModule.forRoot({ extras: { lazyRender: true } }),
];

@NgModule({
  imports: [...MODULES],
  exports: [MODULES],
})
export class FormModule {}
