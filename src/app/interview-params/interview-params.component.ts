import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-params',
  templateUrl: './interview-params.component.html',
  styleUrls: ['./interview-params.component.css']
})
export class InterviewParamsComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router) {
  }

  requestQuestions() : void {
    this.router.navigateByUrl('questions');
  }

}
