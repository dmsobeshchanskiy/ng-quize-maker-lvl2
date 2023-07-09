import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';
import { QuizeCriteria } from '../models/quize-criteria';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent {
  @Input() public categories: OpentdbQuizeCategory[];
  @Output() public createQuizeRequested = new EventEmitter<QuizeCriteria>();

  public criteria: QuizeCriteria;
  
  constructor() {
    this.categories = new Array<OpentdbQuizeCategory>();
    this.criteria = new QuizeCriteria(-1, '');
  }

  public onCreate(): void {
    this.createQuizeRequested.emit(this.criteria);
  }
}
