import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareanuevaComponent } from './tareanueva.component';

describe('TareanuevaComponent', () => {
  let component: TareanuevaComponent;
  let fixture: ComponentFixture<TareanuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareanuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareanuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
