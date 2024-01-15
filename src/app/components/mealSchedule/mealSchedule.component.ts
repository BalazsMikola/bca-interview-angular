import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Guest } from 'src/app/interfaces/guest.interface';
import { MealState } from 'src/app/store/meal/reducers/meal.state';
import { selectDates } from 'src/app/store/meal/selectors/meal-schedule.selectors';

@Component({
  selector: 'meal-schedule',
  templateUrl: './mealSchedule.component.html',
  styleUrls: ['./mealSchedule.component.scss'],
})
export class MealSchedule implements OnInit {
  dates$: Observable<{ [date: string]: Guest[] }>;

  constructor(private store: Store<MealState>) {}

  ngOnInit() {
    this.dates$ = this.store.select(selectDates);
  }

  hasAnySpecialGuest(guestList: Guest[]): boolean {
    let anySpecial = false;

    guestList.forEach((guest: Guest) => {
      if (guest.isSpecial === true) {
        anySpecial = true;
      }
    });

    return anySpecial;
  }
}
