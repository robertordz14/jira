import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareausuarioComponent } from './tareausuario.component';

describe('TareausuarioComponent', () => {
  let component: TareausuarioComponent;
  let fixture: ComponentFixture<TareausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
