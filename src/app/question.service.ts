import { Injectable } from '@angular/core';
import { Technology } from './technologies';
import { Level } from './levels';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  technologies: Technology[] = [];
  level: Level;

  addTechnology(technology: Technology) {
    this.technologies.push(technology);
  }

  addLevel(level: Level) {
    this.level = level;
  }

  getTechnologies(): Technology[] {
    return this.technologies;
  }

  getLevels(): Level {
    return this.level;
  }

  constructor() { }
}
