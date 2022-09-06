import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { MatRadioModule } from '@angular/material/radio';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Form } from '../form';

@Component({
  selector: 'app-interview-params',
  templateUrl: './interview-params.component.html',
  styleUrls: ['./interview-params.component.css']
})
export class InterviewParamsComponent implements OnInit {

  javaControl   = new FormControl(false);
  sqlControl    = new FormControl(false);
  jsControl     = new FormControl(false);
  springControl = new FormControl(false);
  levelControl  = new FormControl('junior' as FloatLabelType);

  options = this.formBuilder.group({
    java:   this.javaControl,
    sql:    this.sqlControl,
    spring: this.springControl,
    js:     this.jsControl,
    level:  this.levelControl
  });

  ngOnInit(): void {
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private service: QuestionService) {
  }

  onSubmit(): void {
    this.service.addForm(this.options.value as Form);
    this.router.navigateByUrl('questions');
  }

}
