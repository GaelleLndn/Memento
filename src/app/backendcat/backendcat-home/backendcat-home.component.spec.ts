import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendcatHomeComponent } from './backendcat-home.component';

describe('BackendcatHomeComponent', () => {
  let component: BackendcatHomeComponent;
  let fixture: ComponentFixture<BackendcatHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendcatHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendcatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
