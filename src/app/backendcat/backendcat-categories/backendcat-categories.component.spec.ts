import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendcatCategoriesComponent } from './backendcat-categories.component';

describe('BackendcatCategoriesComponent', () => {
  let component: BackendcatCategoriesComponent;
  let fixture: ComponentFixture<BackendcatCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendcatCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendcatCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
