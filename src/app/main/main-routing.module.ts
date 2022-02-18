import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchCitiesByNameComponent } from './components/search-cities-by-name/search-cities-by-name.component';
import { ShowCitiesWeatherInfoComponent } from './components/show-cities-weather-info/show-cities-weather-info.component';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'search',
        component: SearchCitiesByNameComponent,
      },
      {
        path: 'show-city-weather',
        component: ShowCitiesWeatherInfoComponent,
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
