import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeachCityComponent } from './components/seach-city/search-city.component';
import { ShowCityWeatherComponent } from './components/show-city-weather/show-city-weather.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'search-city',
        component: SeachCityComponent,
      },
      {
        path: 'show-city-weather',
        component: ShowCityWeatherComponent,
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
