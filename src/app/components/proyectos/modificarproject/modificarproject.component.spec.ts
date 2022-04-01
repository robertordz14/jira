import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarprojectComponent } from './modificarproject.component';

describe('ModificarprojectComponent', () => {
  let component: ModificarprojectComponent;
  let fixture: ComponentFixture<ModificarprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
