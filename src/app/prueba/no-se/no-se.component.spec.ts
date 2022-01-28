import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSEComponent } from './no-se.component';

describe('NoSEComponent', () => {
  let component: NoSEComponent;
  let fixture: ComponentFixture<NoSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
