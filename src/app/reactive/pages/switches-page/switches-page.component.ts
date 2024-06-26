import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent {
  form: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    wantNotifications: false,
  }

  ngOnInit(): void {
    this.form.reset(this.person)
  }

  constructor(private fb: FormBuilder) {}

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched;
      return;
    }

    //para no enviar mas información de la necesaria al back
    const {termsAndConditions, ...newPerson } = this.form.value

    this.person = newPerson
    console.log(this.person)

  }

  isValidField(field: keyof typeof this.form.controls) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }
}
