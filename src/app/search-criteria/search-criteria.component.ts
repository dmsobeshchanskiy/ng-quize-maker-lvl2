import { Component, Input } from '@angular/core';
import { OpentdbQuizeCategory } from '../models/opentdb-quize-category';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent {
  @Input() public categories: OpentdbQuizeCategory[];

  constructor() {
    this.categories = new Array<OpentdbQuizeCategory>();
  }

  public onCreate(): void {
    
  }
}
