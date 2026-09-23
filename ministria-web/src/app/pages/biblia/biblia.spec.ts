import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biblia } from './biblia';

describe('Biblia', () => {
  let component: Biblia;
  let fixture: ComponentFixture<Biblia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biblia],
    }).compileComponents();

    fixture = TestBed.createComponent(Biblia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
