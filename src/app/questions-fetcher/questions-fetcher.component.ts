import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { SummaryService } from '../summary.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-fetcher',
  templateUrl: './questions-fetcher.component.html',
  styleUrls: ['./questions-fetcher.component.css']
})
export class QuestionsFetcherComponent implements OnInit {

  questions!: Observable<{ question: string, answer: string, level: string, technology: string }[]>;

  requestUrl: string = 'http://localhost:8080/questions/selected';

  private marks = new Map<string, number>();

  constructor(private summaryService: SummaryService, private router: Router, private service: QuestionService, private httpClient: HttpClient) { 
    this.questions = this.requestQuestions();
  }

  ngOnInit(): void {
  }

  requestQuestions() {
    return this.httpClient.get<{ question: string, answer: string, level: string, technology: string }[]> (this.buildRequestUrl());
  }

  buildRequestUrl(): string {
    return this.requestUrl 
      + '?level=' + this.service.getLevel()
      + '&has_java=' + this.service.hasJava()
      + '&has_spring=' + this.service.hasSpring()
      + '&has_js=' + this.service.hasJs()
      + '&has_sql=' + this.service.hasSql();
  }

  addMark(technology: String, event: Event, i: number): void {
    let mark = +(event.target as HTMLInputElement).value; 
    this.marks.set(technology + ':' + i.toString(), mark);
  }

  evaluate(cons: string, pros: string) {
    this.summaryService.addData(this.marks, cons, pros);
    this.router.navigateByUrl('summary');
  }

}
