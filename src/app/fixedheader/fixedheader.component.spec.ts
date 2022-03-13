import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedheaderComponent } from './fixedheader.component';

describe('FixedheaderComponent', () => {
  let component: FixedheaderComponent;
  let fixture: ComponentFixture<FixedheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
