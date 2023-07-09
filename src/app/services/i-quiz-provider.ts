import { Observable } from 'rxjs';
import { OpentdbQuiz } from '../models/opentdb-quiz';
import { OpentdbQuizCategory } from '../models/opentdb-quiz-category';

export interface IQuizProvider {
    getQuizCategories(): Observable<OpentdbQuizCategory[]>;
    getQuizQuestions(categoryId: number, difficulty: string): Observable<OpentdbQuiz>;
}
