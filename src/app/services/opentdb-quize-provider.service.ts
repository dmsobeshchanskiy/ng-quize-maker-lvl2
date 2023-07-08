import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuizeProvider } from './i-quize-provider';
import { Observable } from 'rxjs';
import { QuizeDTO } from '../models/quize-DTO';
import { QuizeCategoryDTO } from '../models/quize-category-DTO';

@Injectable()
export class OpentdbQuizeProviderService implements IQuizeProvider {

    constructor(private http: HttpClient) { }
    
    public getQuizeCategories(): Observable<QuizeCategoryDTO[]> {
        return this.http.get<QuizeCategoryDTO[]>("https://opentdb.com/api_category.php");
    }
    
    public getQuizeQuestions(categoryId: number, difficulty: string): Observable<QuizeDTO> {
        const url = `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
        return this.http.get<QuizeDTO>(url);
    }

}
