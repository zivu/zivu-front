import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewParamsComponent } from './interview-params.component';

describe('InterviewParamsComponent', () => {
  let component: InterviewParamsComponent;
  let fixture: ComponentFixture<InterviewParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
