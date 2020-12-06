import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMountainsComponent } from './sidebar-mountains.component';

describe('SidebarMountainsComponent', () => {
  let component: SidebarMountainsComponent;
  let fixture: ComponentFixture<SidebarMountainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMountainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
