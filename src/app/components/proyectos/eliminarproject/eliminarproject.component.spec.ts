import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarprojectComponent } from './eliminarproject.component';

describe('EliminarprojectComponent', () => {
  let component: EliminarprojectComponent;
  let fixture: ComponentFixture<EliminarprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
