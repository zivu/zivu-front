import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  cons: string;

  pros: string;

  techSummary: Map<string, number>;

  constructor(private service: SummaryService) { 
    this.cons = this.service.getCons();
    this.pros = this.service.getPros();
    this.techSummary = this.service.getTechSummary();
  }

  ngOnInit(): void {
  }

}
