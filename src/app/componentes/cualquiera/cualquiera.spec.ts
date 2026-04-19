import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cualquiera } from './cualquiera';

describe('Cualquiera', () => {
  let component: Cualquiera;
  let fixture: ComponentFixture<Cualquiera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cualquiera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cualquiera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
