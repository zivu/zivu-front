import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Item {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-interview-params',
  templateUrl: './interview-params.component.html',
  styleUrls: ['./interview-params.component.css']
})
export class InterviewParamsComponent implements OnInit {


  technologies: Item[] = [
    { name: "Java", checked: false },
    { name: "SQL", checked: false },
    { name: "JS", checked: false },
    { name: "Spring", checked: false }
  ];

  complexity: Item[] = [
    { name: "Junior", checked: false },
    { name: "Middle", checked: false },
    { name: "Senior", checked: false }
  ];

  ngOnInit(): void {
  }

  constructor(private router: Router) {
  }

  requestQuestions(): void {
    this.router.navigateByUrl('questions');
  }

}
