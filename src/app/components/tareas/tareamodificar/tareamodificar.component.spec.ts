import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareamodificarComponent } from './tareamodificar.component';

describe('TareamodificarComponent', () => {
  let component: TareamodificarComponent;
  let fixture: ComponentFixture<TareamodificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareamodificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareamodificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
