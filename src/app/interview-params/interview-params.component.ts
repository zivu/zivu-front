import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { MatRadioModule } from '@angular/material/radio';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

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

  complexity: string;

  javaControl = new FormControl(false);
  sqlControl = new FormControl(false);
  jsControl = new FormControl(false);
  springControl = new FormControl(false);
  levelControl = new FormControl('junior' as FloatLabelType);

  options = this.formBuilder.group({
    java:   this.javaControl,
    sql:    this.sqlControl,
    spring: this.springControl,
    js:     this.jsControl,
    level:  this.levelControl
  });

  ngOnInit(): void {
  }

  constructor(private router: Router, private questionService: QuestionService,
    private formBuilder: FormBuilder) {
  }

  addTechnology(checked: boolean, name: string): void {
    this.questionService.addTechnology({ name: name, checked: checked });
  }

  addLevel(name: string): void {
    this.questionService.addLevel({ name: name});
  }

  requestQuestions(): void {
    this.router.navigateByUrl('questions');
  }

}
