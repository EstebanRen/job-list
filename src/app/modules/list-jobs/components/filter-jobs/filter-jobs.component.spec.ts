import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterJobsComponent } from './filter-jobs.component';

describe('FilterJobsComponent', () => {
  let component: FilterJobsComponent;
  let fixture: ComponentFixture<FilterJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterJobsComponent]
    });
    fixture = TestBed.createComponent(FilterJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
