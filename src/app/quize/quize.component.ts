import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { QuizeService } from '../services/quize.service';
import { AnswersService } from '../services/answers.service';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';
import { QuizeCriteria } from '../models/quize-criteria';
import { Question } from '../models/question';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.css']
})
export class QuizeComponent {

  public quizeCategory$: Observable<OpentdbQuizeCategory[]>;
  public questions: Question[];
  
  constructor(private quizeService: QuizeService,
              public answersService: AnswersService) {
    this.quizeCategory$ = this.quizeService.getQuizeCategories();
    this.questions = [];
  }

  public onCreateQuizeRequested(criteria: QuizeCriteria): void {
    this.quizeService.getQuizeQuestions(criteria.categoryId, criteria.difficulty)
                  .subscribe((questions: Question[]) => this.questions = questions);
  }
}
