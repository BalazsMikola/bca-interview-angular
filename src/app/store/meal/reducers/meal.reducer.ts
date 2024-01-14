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
    let startDate = new Date(guest.startDate);
    const endDate = new Date(guest.endDate);

    const updatedDates = { ...state.dates };

    while (startDate <= endDate) {
      const stringDate = startDate.toISOString().split('T')[0];

      if (!updatedDates[stringDate]) {
        updatedDates[stringDate] = [];
      }

      updatedDates[stringDate] = [...updatedDates[stringDate], guest];
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    }

    return {
      ...state,
      dates: updatedDates,
    };
  })
);
