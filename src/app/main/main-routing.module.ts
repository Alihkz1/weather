import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { OutPutComponent } from './components/out-put/out-put.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
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
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainRoutingModule {}
