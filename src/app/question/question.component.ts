import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() public question!: Question;
  @Output() public answered = new EventEmitter();

  public setAnswer(answer: string): void {
    if (this.question.userAnswer === answer) {
      this.question.userAnswer = '';
    } else {
      this.question.userAnswer = answer;
    }
    this.answered.emit();
  }
}
