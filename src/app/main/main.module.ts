import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FormModule } from 'src/shared/modules/formly/formly.module';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from 'src/shared/modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent, InputComponent],
  imports: [CommonModule, FormModule, MaterialModule, HttpClientModule],
  exports: [MainComponent],
})
export class MainModule {}
