import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpentdbQuizCategory } from '../models/opentdb-quiz-category';
import { QuizCriteria } from '../models/quiz-criteria';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCriteriaComponent {
  @Input() public categories: OpentdbQuizCategory[];
  @Input() public loading = false;
  @Output() public createQuizRequested = new EventEmitter<QuizCriteria>();

  public criteriaForm: FormGroup;
  public categoryControl: FormControl;
  public difficultyControl: FormControl;
  
  constructor() {
    this.categories = new Array<OpentdbQuizCategory>();
    this.categoryControl = new FormControl(-1, [Validators.min(0)]);
    this.difficultyControl = new FormControl('', [Validators.required]);
    this.criteriaForm = new FormGroup([this.categoryControl, this.difficultyControl]);
  }

  public onCreate(): void {
    this.createQuizRequested.emit(
      new QuizCriteria(this.categoryControl.value, this.difficultyControl.value)
    );
  }
}
