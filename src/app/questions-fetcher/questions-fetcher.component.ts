import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-questions-fetcher',
  templateUrl: './questions-fetcher.component.html',
  styleUrls: ['./questions-fetcher.component.css']
})
export class QuestionsFetcherComponent implements OnInit {

  questions!: Observable<{ question: string, answer: string, level: string, technologies: string }[]>;

  requestUrl: string = 'http://localhost:8080/questions/selected';

  constructor(private service: QuestionService, private httpClient: HttpClient) { 
    this.questions = this.requestQuestions();
  }

  ngOnInit(): void {
  }

  requestQuestions() {
    return this.httpClient.get<{ question: string, answer: string, level: string, technologies: string }[]> (this.buildRequestUrl());
  }

  buildRequestUrl(): string {
    return this.requestUrl 
      + '?level=' + this.service.getLevel()
      + '&has_java=' + this.service.hasJava()
      + '&has_spring=' + this.service.hasSpring()
      + '&has_js=' + this.service.hasJs()
      + '&has_sql=' + this.service.hasSql();
  }

}
