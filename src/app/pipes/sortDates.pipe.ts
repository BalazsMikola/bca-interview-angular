import { Pipe, PipeTransform } from '@angular/core';
import { Guest } from '../interfaces/guest.interface';

@Pipe({
  name: 'sortDates',
})
export class SortDatesPipe implements PipeTransform {
  transform(
    dates: { [date: string]: Guest[] } | null
  ): Array<{ date: string; guests: Guest[] }> {
    if (!dates) {
      return [];
    }
    return Object.entries(dates)
      .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
      .map(([date, guests]) => ({ date, guests }));
  }
}
