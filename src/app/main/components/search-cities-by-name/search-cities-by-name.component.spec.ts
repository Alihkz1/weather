import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCitiesByNameComponent } from './search-cities-by-name.component';

describe('SearchCitiesByNameComponent', () => {
  let component: SearchCitiesByNameComponent;
  let fixture: ComponentFixture<SearchCitiesByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCitiesByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCitiesByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
