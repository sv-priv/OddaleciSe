import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMountainsComponent } from './main-mountains.component';

describe('MainMountainsComponent', () => {
  let component: MainMountainsComponent;
  let fixture: ComponentFixture<MainMountainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMountainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
