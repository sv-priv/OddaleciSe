import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLakesComponent } from './sidebar-lakes.component';

describe('SidebarLakesComponent', () => {
  let component: SidebarLakesComponent;
  let fixture: ComponentFixture<SidebarLakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
