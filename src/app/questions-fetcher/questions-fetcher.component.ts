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

  constructor(private service: QuestionService, private httpClient: HttpClient) {
    console.log(service.getTechnologies());  
    this.questions = this.requestQuestions();
  }

  ngOnInit(): void {
  }

  requestQuestions() {
    return this.httpClient.get<{ question: string, answer: string, level: string, technologies: string }[]> ('http://localhost:8080/questions/all');
  }

}
