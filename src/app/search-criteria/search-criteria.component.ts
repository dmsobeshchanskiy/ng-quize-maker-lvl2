import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OpentdbQuizCategory } from '../models/opentdb-quiz-category';
import { QuizCriteria } from '../models/quiz-criteria';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent {
  @Input() public categories: OpentdbQuizCategory[];
  @Output() public createQuizRequested = new EventEmitter<QuizCriteria>();

  public criteria: QuizCriteria;
  
  constructor() {
    this.categories = new Array<OpentdbQuizCategory>();
    this.criteria = new QuizCriteria(-1, '');
  }

  public onCreate(): void {
    this.createQuizRequested.emit(this.criteria);
  }
}
