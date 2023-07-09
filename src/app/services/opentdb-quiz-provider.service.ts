import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuizProvider } from './i-quiz-provider';
import { Observable, map } from 'rxjs';
import { OpentdbQuiz } from '../models/opentdb-quiz';
import { OpentdbQuizCategory } from '../models/opentdb-quiz-category';
import { OpentdbTrivia } from '../models/opentdb-trivia';

@Injectable({
    providedIn: 'root'
})
export class OpentdbQuizProviderService implements IQuizProvider {

    constructor(private http: HttpClient) { }
    
    public getQuizCategories(): Observable<OpentdbQuizCategory[]> {
        return this.http.get<OpentdbTrivia>("https://opentdb.com/api_category.php")
                .pipe(map((trivia: OpentdbTrivia) => trivia.trivia_categories));
    }
    
    public getQuizQuestions(categoryId: number, difficulty: string): Observable<OpentdbQuiz> {
        const url = `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
        return this.http.get<OpentdbQuiz>(url);
    }

}
