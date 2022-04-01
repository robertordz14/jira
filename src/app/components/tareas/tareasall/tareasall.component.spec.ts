import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasallComponent } from './tareasall.component';

describe('TareasallComponent', () => {
  let component: TareasallComponent;
  let fixture: ComponentFixture<TareasallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
