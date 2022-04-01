import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectnuevoComponent } from './projectnuevo.component';

describe('ProjectnuevoComponent', () => {
  let component: ProjectnuevoComponent;
  let fixture: ComponentFixture<ProjectnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectnuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
