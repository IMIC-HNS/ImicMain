import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyholderDashboardComponent } from './policyholder-dashboard.component';

describe('PolicyholderDashboardComponent', () => {
  let component: PolicyholderDashboardComponent;
  let fixture: ComponentFixture<PolicyholderDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyholderDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyholderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
