import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLakesComponent } from './main-lakes.component';

describe('MainLakesComponent', () => {
  let component: MainLakesComponent;
  let fixture: ComponentFixture<MainLakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
