import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuizeProvider } from './i-quize-provider';
import { Observable, map } from 'rxjs';
import { OpentdbQuize } from '../models/opentdb-quize';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';
import { OpentdbTrivia } from '../models/opentdb-trivia';

@Injectable({
    providedIn: 'root'
})
export class OpentdbQuizeProviderService implements IQuizeProvider {

    constructor(private http: HttpClient) { }
    
    public getQuizeCategories(): Observable<OpentdbQuizeCategory[]> {
        return this.http.get<OpentdbTrivia>("https://opentdb.com/api_category.php")
                .pipe(map((trivia: OpentdbTrivia) => trivia.trivia_categories));
    }
    
    public getQuizeQuestions(categoryId: number, difficulty: string): Observable<OpentdbQuize> {
        const url = `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
        return this.http.get<OpentdbQuize>(url);
    }

}
