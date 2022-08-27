import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsFetcherComponent } from './questions-fetcher.component';

describe('QuestionsFetcherComponent', () => {
  let component: QuestionsFetcherComponent;
  let fixture: ComponentFixture<QuestionsFetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsFetcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
