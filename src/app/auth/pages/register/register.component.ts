import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required,  Validators.pattern(this.validatorsService.emailPattern)]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });


  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService) {}

  isValidField(field: keyof typeof this.form.controls) {
    return this.validatorsService.isValidField(field, this.form)

    // return (
    //   this.form.controls[field].errors &&
    //   this.form.controls[field].touched
    // );
  }

  onSave(){
    this.form.markAllAsTouched();
  }
}
