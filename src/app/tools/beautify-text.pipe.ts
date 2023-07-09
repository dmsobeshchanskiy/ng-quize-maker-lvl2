import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautifyText'
})
export class BeautifyTextPipe implements PipeTransform {

  public transform(value: string): string {
    if (!value) return '';
    return value.replaceAll('&quot;', '\"')
                .replaceAll('&#039;', '\'');
  }

}
