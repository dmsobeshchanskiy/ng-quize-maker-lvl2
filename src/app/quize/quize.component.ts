import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { QuizeService } from '../services/quize.service';
import { AnswersService } from '../services/answers.service';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';
import { QuizeCriteria } from '../models/quize-criteria';
import { Question } from '../models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.css']
})
export class QuizeComponent implements OnDestroy {

  public quizeCategories$: Observable<OpentdbQuizeCategory[]>;
  public questions: Question[];
  public allQuestionsAnswered = false;

  private subscription?: Subscription;
  
  constructor(private quizeService: QuizeService,
              private answersService: AnswersService,
              private router: Router) {
    this.quizeCategories$ = this.quizeService.getQuizeCategories();
    this.questions = [];
  }
  
  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public onCreateQuizeRequested(criteria: QuizeCriteria): void {
    this.subscription = this.quizeService.getQuizeQuestions(criteria.categoryId, criteria.difficulty)
                  .subscribe((questions: Question[]) => this.questions = questions);
  }

  public onAnswered(): void {
    this.allQuestionsAnswered = !this.questions.some(q => !q.userAnswer?.length);
  }

  public onSubmit(): void {
    if (this.allQuestionsAnswered) {
      this.answersService.setAnsweredQuestions(this.questions);
      this.router.navigateByUrl('results');
    }
  }

}
