import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  private answeredQuestions: Question[];
  
  constructor() {
    this.answeredQuestions = new Array<Question>();
  }

  public setAnsweredQuestions(responses: Question[]): void {
    this.answeredQuestions = responses;
  }

  public getAnsweredQuestions(): Question[] {
    return this.answeredQuestions;
  }

}
