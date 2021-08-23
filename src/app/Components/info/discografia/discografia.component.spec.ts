import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscografiaComponent } from './discografia.component';

describe('DiscografiaComponent', () => {
  let component: DiscografiaComponent;
  let fixture: ComponentFixture<DiscografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscografiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
