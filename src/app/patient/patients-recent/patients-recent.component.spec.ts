import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsRecentComponent } from './patients-recent.component';

describe('PatientsRecentComponent', () => {
  let component: PatientsRecentComponent;
  let fixture: ComponentFixture<PatientsRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
