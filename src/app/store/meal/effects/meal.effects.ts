import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addNewGuest, getTestData, setLoading } from '../actions/meal.actions';
import { MealService } from '../../../services/meal.service';

@Injectable()
export class MealEffects {
  getTestData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getTestData),
        switchMap(() => this.mealService.getTestData()),
        tap((response: any) => {
          console.log('🚀 ~ MealEffects ~ tap ~ response:', response);
        })
      ),
    { dispatch: false }
  );

  addNewGuest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addNewGuest),
        map(() => setLoading({ isLoading: false }))
      ),
    { dispatch: true }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private readonly mealService: MealService
  ) {}
}
