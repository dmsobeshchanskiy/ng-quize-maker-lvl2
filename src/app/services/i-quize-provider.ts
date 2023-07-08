import { Observable } from 'rxjs';
import { QuizeDTO } from '../models/quize-DTO';
import { QuizeCategoryDTO } from '../models/quize-category-DTO';

export interface IQuizeProvider {
    getQuizeCategories(): Observable<QuizeCategoryDTO[]>;
    getQuizeQuestions(categoryId: number, difficulty: string): Observable<QuizeDTO>;
}
