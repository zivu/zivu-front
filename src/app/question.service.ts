import { Injectable } from '@angular/core';
import { Technology } from './technologies';
import { Level } from './levels';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  technologies: Technology[] = [];
  levels: Level[] = [];

  addTechnology(technology: Technology) {
    this.technologies.push(technology);
  }

  addLevel(level: Level) {
    this.levels.push(level);
  }

  getTechnologies(): Technology[] {
    return this.technologies;
  }

  constructor() { }
}
