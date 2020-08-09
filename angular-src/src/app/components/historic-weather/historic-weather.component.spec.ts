import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricWeatherComponent } from './historic-weather.component';

describe('HistoricWeatherComponent', () => {
  let component: HistoricWeatherComponent;
  let fixture: ComponentFixture<HistoricWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
