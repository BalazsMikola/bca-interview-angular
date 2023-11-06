import { createAction, props } from '@ngrx/store';

const actionPrefix = '[Meal]';

export interface SetLoading {
  readonly isLoading: boolean;
}

export const setLoading = createAction(
  `${actionPrefix} Set Loading`,
  props<SetLoading>()
);

export const getTestData = createAction(`${actionPrefix} Get test data`);
