import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questions-fetcher',
  templateUrl: './questions-fetcher.component.html',
  styleUrls: ['./questions-fetcher.component.css']
})
export class QuestionsFetcherComponent implements OnInit {

  constructor(private service: QuestionService) {
    console.log(service.getLevels());
  }

  ngOnInit(): void {
  }

}
