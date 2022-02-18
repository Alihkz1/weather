import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCitiesWeatherInfoComponent } from './show-cities-weather-info.component';

describe('ShowCitiesWeatherInfoComponent', () => {
  let component: ShowCitiesWeatherInfoComponent;
  let fixture: ComponentFixture<ShowCitiesWeatherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCitiesWeatherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCitiesWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
