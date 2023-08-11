import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJobsComponent } from './card-jobs.component';

describe('CardJobsComponent', () => {
  let component: CardJobsComponent;
  let fixture: ComponentFixture<CardJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardJobsComponent]
    });
    fixture = TestBed.createComponent(CardJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
