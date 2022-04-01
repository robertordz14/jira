import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectusuarioComponent } from './projectusuario.component';

describe('ProjectusuarioComponent', () => {
  let component: ProjectusuarioComponent;
  let fixture: ComponentFixture<ProjectusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
