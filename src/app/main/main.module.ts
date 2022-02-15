import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FormModule } from 'src/shared/modules/formly/formly.module';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from 'src/shared/modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { OutPutComponent } from './components/out-put/out-put.component';
import { OutPutFacade } from './components/out-put/out-put.facade';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../layout/components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'inPut',
    component: InputComponent,
  },
  {
    path: 'outPut',
    component: OutPutComponent,
  },
  {
    path: '**',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [MainComponent, InputComponent, OutPutComponent],
  imports: [
    CommonModule,
    FormModule,
    MaterialModule,
    HttpClientModule,

    RouterModule.forChild(routes),
  ],
  exports: [MainComponent],
  providers: [OutPutFacade],
})
export class MainModule {}
