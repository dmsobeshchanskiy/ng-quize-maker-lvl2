import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IQuizeProvider } from './i-quize-provider';
import { QUIZE_PROVIDER_TOKEN } from './quize-provider-token';
import { QuizeCategoryDTO } from '../models/quize-category-DTO';
import { Question } from '../models/question';
import { QuizeDTO } from '../models/quize-DTO';
import { QuizeItemDTO } from '../models/quize-item-DTO';


@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(@Inject(QUIZE_PROVIDER_TOKEN) private quizeProvider: IQuizeProvider) {}
  
  public getQuizeCategories(): Observable<QuizeCategoryDTO[]> {
    return this.quizeProvider.getQuizeCategories();
  }

  public getQuizeQuestions(categoryId: number, difficulty: string): Observable<Question[]> {
    return this.quizeProvider.getQuizeQuestions(categoryId, difficulty).pipe(
      map((quize: QuizeDTO) => this.toQuestions(quize))
    );
  }


  private toQuestions(quize: QuizeDTO): Question[] {
    const questions = new Array<Question>();
    if (quize && quize.results?.length) {
      quize.results.forEach((item: QuizeItemDTO) => {
        const question = new Question(item.question, [...item.incorrect_answers, item.correct_answer],  item.correct_answer, '');
        questions.push(question);
      });
    }
    return questions;
  }
}
