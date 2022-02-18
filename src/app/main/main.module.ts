import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/shared/modules/material/material.module';
import { FormModule } from 'src/shared/modules/formly/formly.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ShowCitiesWeatherInfoComponent } from './components/show-cities-weather-info/show-cities-weather-info.component';
import { SearchCitiesByNameComponent } from './components/search-cities-by-name/search-cities-by-name.component';
@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ShowCitiesWeatherInfoComponent,
    SearchCitiesByNameComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
