import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../services/answers.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {

  public anweredQuestions: Question[];
  public score = 0;
  public scoreClass: 'red' | 'yellow' | 'green' = 'red';

  constructor(private router: Router,
              private answerService: AnswersService) {
      this.anweredQuestions = this.answerService.getAnsweredQuestions() || [];
      this.calcScore();
  }

  public onCreateNewQuizRequested(): void {
    this.router.navigateByUrl('quiz');
  }

  private calcScore(): void {
    if (this.anweredQuestions?.length) {
      this.score = this.anweredQuestions.filter(q => q.userAnswer === q.correctAnswer).length;
      if (this.score <= 1) {
        this.scoreClass = 'red';
      } else if (this.score <=3) {
        this.scoreClass = 'yellow';
      } else {
        this.scoreClass = 'green';
      }
    }
  }
}
