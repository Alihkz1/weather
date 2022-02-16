import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { OutPutComponent } from './components/out-put/out-put.component';
import { OutPutFacade } from './components/out-put/out-put.facade';
import { MaterialModule } from 'src/shared/modules/material/material.module';
import { FormModule } from 'src/shared/modules/formly/formly.module';
@NgModule({
  declarations: [HomeComponent, InputComponent, OutPutComponent],
  imports: [CommonModule, FormModule, MaterialModule, HttpClientModule],
  exports: [HomeComponent],
  providers: [OutPutFacade],
})
export class MainModule {}
