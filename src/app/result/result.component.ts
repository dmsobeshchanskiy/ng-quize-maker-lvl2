import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent {
  @Input() public question!: Question;
}
