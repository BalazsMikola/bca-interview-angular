import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'guest-form',
  templateUrl: './guestForm.component.html',
  styleUrls: ['./guestForm.component.scss'],
})
export class GuestForm {
  guestForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    },
    {
      validators: this.dateCompareValidator(),
    }
  );

  onSubmit(): void {
    this.guestForm.reset();
  }

  private dateCompareValidator(): any {
    return (group: FormGroup): ValidationErrors | null => {
      const startDateControl = group.controls['startDate'];
      const endDateControl = group.controls['endDate'];

      if (startDateControl.value && endDateControl.value) {
        const startDate = new Date(startDateControl.value);
        const endDate = new Date(endDateControl.value);

        if (endDate < startDate) {
          return { dateError: true };
        }
        return null;
      }
      return null;
    };
  }
}
