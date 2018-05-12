import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendLogsComponent } from './backend-logs.component';

describe('BackendLogsComponent', () => {
  let component: BackendLogsComponent;
  let fixture: ComponentFixture<BackendLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
