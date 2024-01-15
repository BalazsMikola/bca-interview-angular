import { createReducer, on } from '@ngrx/store';
import { MealState, initialState } from './meal.state';
import { SetLoading, addNewGuest, setLoading } from '../actions/meal.actions';

export const mealReducer = createReducer(
  initialState,
  on(
    setLoading,
    (state: MealState, { isLoading }: SetLoading): MealState => ({
      ...state,
      isLoading,
    })
  ),
  on(addNewGuest, (state: MealState, { guest }): MealState => {
    const updatedDates = { ...state.dates };

    let startDate = new Date(guest.startDate);
    const endDate = new Date(guest.endDate);

    while (startDate <= endDate) {
      const startDateStr = startDate.toISOString().split('T')[0];

      if (!updatedDates[startDateStr]) {
        updatedDates[startDateStr] = [];
      }

      updatedDates[startDateStr] = [...updatedDates[startDateStr], guest];
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    }

    return {
      ...state,
      dates: updatedDates,
    };
  })
);
