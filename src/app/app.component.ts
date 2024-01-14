import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNewGuest, setLoading } from './store/meal/actions/meal.actions';
import { selectIsLoading } from './store/meal/selectors/meal-schedule.selectors';
import { Guest } from './interfaces/guest.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly isLoading$ = this.store.select(selectIsLoading);

  constructor(private readonly store: Store) {}

  onGuestAdded(guest: Guest) {
    this.store.dispatch(setLoading({ isLoading: true }));
    this.store.dispatch(addNewGuest({ guest: guest }));
  }
}
