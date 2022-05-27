import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMainComponent } from './sidenav-main.component';

describe('SidenavMainComponent', () => {
  let component: SidenavMainComponent;
  let fixture: ComponentFixture<SidenavMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
