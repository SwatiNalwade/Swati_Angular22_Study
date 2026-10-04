import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalBasedForm } from './signal-based-form';

describe('SignalBasedForm', () => {
  let component: SignalBasedForm;
  let fixture: ComponentFixture<SignalBasedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBasedForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalBasedForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
