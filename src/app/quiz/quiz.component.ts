import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { QuizService } from '../services/quiz.service';
import { AnswersService } from '../services/answers.service';
import { OpentdbQuizCategory } from '../models/opentdb-quiz-category';
import { QuizCriteria } from '../models/quiz-criteria';
import { Question } from '../models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quize',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnDestroy {

  public quizCategories$: Observable<OpentdbQuizCategory[]>;
  public questions: Question[];
  public allQuestionsAnswered = false;

  private subscription?: Subscription;
  
  constructor(private quizService: QuizService,
              private answersService: AnswersService,
              private router: Router) {
    this.quizCategories$ = this.quizService.getQuizCategories();
    this.questions = [];
  }
  
  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public onCreateQuizRequested(criteria: QuizCriteria): void {
    this.subscription = this.quizService.getQuizQuestions(criteria.categoryId, criteria.difficulty)
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
