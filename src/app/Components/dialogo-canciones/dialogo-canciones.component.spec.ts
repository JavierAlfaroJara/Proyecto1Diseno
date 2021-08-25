import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCancionesComponent } from './dialogo-canciones.component';

describe('DialogoCancionesComponent', () => {
  let component: DialogoCancionesComponent;
  let fixture: ComponentFixture<DialogoCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
