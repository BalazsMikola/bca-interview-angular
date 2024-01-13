import { Guest } from 'src/app/interfaces/guest.interface';

export interface MealState {
  readonly isLoading: boolean;
  readonly dates: { [x: string]: Guest[] };
}

export const initialState: MealState = {
  isLoading: false,
  dates: {},
};
