import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { OutPutComponent } from './components/out-put/output.component';
import { OutPutFacade } from './components/out-put/out-put.facade';
import { MaterialModule } from 'src/shared/modules/material/material.module';
import { FormModule } from 'src/shared/modules/formly/formly.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
@NgModule({
  declarations: [HomeComponent, InputComponent, OutPutComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [HomeComponent],
  providers: [OutPutFacade],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
