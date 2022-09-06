import { Injectable } from '@angular/core';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  form: Form;

  addForm(form: Form) {
    this.form = form;
  }

  getLevel(): string {
    return this.form.level;
  }

  hasJava(): boolean {
    return this.form.java;
  }

  hasSql(): boolean {
    return this.form.sql;
  }

  hasJs(): boolean {
    return this.form.js;
  }

  hasSpring(): boolean {
    return this.form.spring
  }

}
