import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

export interface Technology {
  name: string;
  checked: boolean;
}

export interface Level {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-interview-params',
  templateUrl: './interview-params.component.html',
  styleUrls: ['./interview-params.component.css']
})
export class InterviewParamsComponent implements OnInit {


  technologies: Technology[] = [
    { name: "Java", checked: false },
    { name: "SQL", checked: false },
    { name: "JS", checked: false },
    { name: "Spring", checked: false }
  ];

  levels: Level[] = [
    { name: "Junior", checked: false },
    { name: "Middle", checked: false },
    { name: "Senior", checked: false }
  ];

  ngOnInit(): void {
  }

  constructor(private router: Router, private questionService: QuestionService) {
  }

  addTechnology(checked: boolean, name: string): void {
    this.questionService.addTechnology({ name: name, checked: checked });
  }

  addLevel(checked: boolean, name: string): void {
    this.questionService.addLevel({ name: name, checked: checked });
  }

  requestQuestions(): void {
    this.router.navigateByUrl('questions');
  }

}
