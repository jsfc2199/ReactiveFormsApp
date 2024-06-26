import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });


  constructor(private fb: FormBuilder) {}

  isValidField(field: keyof typeof this.form.controls) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }

  onSave(){
    this.form.markAllAsTouched();
  }
}
