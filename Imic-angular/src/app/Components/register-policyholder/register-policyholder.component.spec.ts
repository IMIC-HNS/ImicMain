import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPolicyholderComponent } from './register-policyholder.component';

describe('RegisterPolicyholderComponent', () => {
  let component: RegisterPolicyholderComponent;
  let fixture: ComponentFixture<RegisterPolicyholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPolicyholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPolicyholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
