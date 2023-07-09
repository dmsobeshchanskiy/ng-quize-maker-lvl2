import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IQuizeProvider } from './i-quize-provider';
import { QUIZE_PROVIDER_TOKEN } from './quize-provider-token';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';
import { Question } from '../models/question';
import { OpentdbQuize } from '../models/opentdb-quize';
import { OpentdbQuizeItem } from '../models/opentdb-quize-item';


@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(@Inject(QUIZE_PROVIDER_TOKEN) private quizeProvider: IQuizeProvider) {}
  
  public getQuizeCategories(): Observable<OpentdbQuizeCategory[]> {
    return this.quizeProvider.getQuizeCategories();
  }

  public getQuizeQuestions(categoryId: number, difficulty: string): Observable<Question[]> {
    return this.quizeProvider.getQuizeQuestions(categoryId, difficulty).pipe(
      map((quize: OpentdbQuize) => this.toQuestions(quize))
    );
  }


  private toQuestions(quize: OpentdbQuize): Question[] {
    const questions = new Array<Question>();
    if (quize && quize.results?.length) {
      quize.results.forEach((item: OpentdbQuizeItem) => {
        const question = new Question(item.question, [...item.incorrect_answers, item.correct_answer],  item.correct_answer, '');
        questions.push(question);
      });
    }
    return questions;
  }
}
