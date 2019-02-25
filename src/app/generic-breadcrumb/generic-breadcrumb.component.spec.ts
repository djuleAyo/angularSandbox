import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBreadcrumbComponent } from './generic-breadcrumb.component';

describe('GenericBreadcrumbComponent', () => {
  let component: GenericBreadcrumbComponent;
  let fixture: ComponentFixture<GenericBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
