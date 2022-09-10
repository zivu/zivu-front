import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  marks: Map<string, number>;

  cons: string;

  pros: string;

  addData(marks: Map<string, number>, cons: string, pros: string) {
    this.marks = marks;
    this.cons = cons;
    this.pros = pros;
  }

  getCons(): string {
    return this.cons;
  }

  getPros(): string {
    return this.pros;
  }

  getTechSummary(): Map<string, number> {
    let summary = new Map<string, number>;
    let numberOfQuestions = new Map<string, number>;
    for(let entry of this.marks.entries()) {
      let key = entry[0].split(':', 1)[0];
      if(summary.has(key)) {
        let existingVal = summary.get(key);
        if(existingVal !== undefined) {
          let newVal = existingVal + entry[1];
          summary.set(key, newVal);
          numberOfQuestions.set(key, numberOfQuestions.get(key) as number + 1);
        }
      } else {
        numberOfQuestions.set(key, 1);
        summary.set(key, entry[1]);
      }
    }
    for(let entry of summary.entries()) {
      let avg = (entry[1]/(numberOfQuestions.get(entry[0]) as number));
      summary.set(entry[0], avg.toFixed(2) as unknown as number);
    }
    return summary;
  }

  constructor() { }
}
