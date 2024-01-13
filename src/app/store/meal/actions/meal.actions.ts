import { createAction, props } from '@ngrx/store';
import { Guest } from 'src/app/interfaces/guest.interface';

const actionPrefix = '[Meal]';

export interface SetLoading {
  readonly isLoading: boolean;
}

export const setLoading = createAction(
  `${actionPrefix} Set Loading`,
  props<SetLoading>()
);

export const addNewGuest = createAction(
  `${actionPrefix} Add New Guest`,
  props<{ guest: Guest }>()
);

export const getTestData = createAction(`${actionPrefix} Get test data`);
