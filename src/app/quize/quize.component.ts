import { Component } from '@angular/core';
import { QuizeService } from '../services/quize.service';
import { AnswersService } from '../services/answers.service';
import { Observable, take } from 'rxjs';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.css']
})
export class QuizeComponent {

  public quizeCategory$: Observable<OpentdbQuizeCategory[]>;
  
  constructor(private quizeService: QuizeService,
              public answersService: AnswersService) {
    this.quizeCategory$ = this.quizeService.getQuizeCategories().pipe(take(1));
  }
}
