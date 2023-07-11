import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautifyText'
})
export class BeautifyTextPipe implements PipeTransform {

  public transform(value: string): string {
    if (!value) return '';
    return value.replace(/&quot;/gi, '\"')
                .replace(/&#039;/gi, '\'');
  }

}
