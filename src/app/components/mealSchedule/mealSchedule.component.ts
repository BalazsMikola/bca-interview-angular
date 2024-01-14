import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Guest } from 'src/app/interfaces/guest.interface';
import { selectDates } from 'src/app/store/meal/selectors/meal-schedule.selectors';

@Component({
  selector: 'meal-schedule',
  templateUrl: './mealSchedule.component.html',
  styleUrls: ['./mealSchedule.component.scss'],
})
export class MealSchedule implements OnInit {
  dates$: Observable<{ [date: string]: Guest[] }>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.dates$ = this.store.select(selectDates);
  }

  orderByDate(value: KeyValue<string, Guest[]>): any {
    return Object.keys(value).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );
  }
}
