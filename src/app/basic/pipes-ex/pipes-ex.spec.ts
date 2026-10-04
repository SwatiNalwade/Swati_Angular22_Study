import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesEX } from './pipes-ex';

describe('PipesEX', () => {
  let component: PipesEX;
  let fixture: ComponentFixture<PipesEX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesEX],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesEX);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
