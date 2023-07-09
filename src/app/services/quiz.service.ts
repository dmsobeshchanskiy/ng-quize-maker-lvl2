import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IQuizProvider } from './i-quiz-provider';
import { QUIZ_PROVIDER_TOKEN } from './quiz-provider-token';
import { OpentdbQuizCategory } from '../models/opentdb-quiz-category';
import { Question } from '../models/question';
import { OpentdbQuiz } from '../models/opentdb-quiz';
import { OpentdbQuizItem } from '../models/opentdb-quiz-item';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(@Inject(QUIZ_PROVIDER_TOKEN) private quizProvider: IQuizProvider) {}
  
  public getQuizCategories(): Observable<OpentdbQuizCategory[]> {
    return this.quizProvider.getQuizCategories();
  }

  public getQuizQuestions(categoryId: number, difficulty: string): Observable<Question[]> {
    return this.quizProvider.getQuizQuestions(categoryId, difficulty).pipe(
      map((quize: OpentdbQuiz) => this.toQuestions(quize))
    );
  }


  private toQuestions(quize: OpentdbQuiz): Question[] {
    const questions = new Array<Question>();
    if (quize && quize.results?.length) {
      quize.results.forEach((item: OpentdbQuizItem) => {
        const question = new Question(item.question, [...item.incorrect_answers, item.correct_answer],  item.correct_answer, '');
        questions.push(question);
      });
    }
    return questions;
  }
}
