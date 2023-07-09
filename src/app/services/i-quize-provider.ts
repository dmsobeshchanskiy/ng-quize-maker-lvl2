import { Observable } from 'rxjs';
import { OpentdbQuize } from '../models/opentdb-quize';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';

export interface IQuizeProvider {
    getQuizeCategories(): Observable<OpentdbQuizeCategory[]>;
    getQuizeQuestions(categoryId: number, difficulty: string): Observable<OpentdbQuize>;
}
