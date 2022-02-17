import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/shared/modules/material/material.module';
import { FormModule } from 'src/shared/modules/formly/formly.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SeachCityComponent } from './components/seach-city/search-city.component';
import { ShowCityWeatherComponent } from './components/show-city-weather/show-city-weather.component';
@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    SeachCityComponent,
    ShowCityWeatherComponent,
  ],
  imports: [
    FormModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MainRoutingModule,
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
