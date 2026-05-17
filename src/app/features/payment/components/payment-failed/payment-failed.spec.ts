import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFailedComponent } from './payment-failed';

describe('PaymentFailed', () => {
  let component: PaymentFailedComponent;
  let fixture: ComponentFixture<PaymentFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentFailedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentFailedComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
