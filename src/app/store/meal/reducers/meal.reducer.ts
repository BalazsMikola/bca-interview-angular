import { createReducer, on } from '@ngrx/store';
import { MealState, initialState } from './meal.state';
import { SetLoading, setLoading } from '../actions/meal.actions';

export const mealReducer = createReducer(
  initialState,
  on(
    setLoading,
    (state: MealState, { isLoading }: SetLoading): MealState => ({
      ...state,
      isLoading,
    })
  )
);
