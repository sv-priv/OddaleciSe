import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakesComponent } from './lakes.component';

describe('LakesComponent', () => {
  let component: LakesComponent;
  let fixture: ComponentFixture<LakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
