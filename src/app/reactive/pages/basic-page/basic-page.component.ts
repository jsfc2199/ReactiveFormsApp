import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  //primera forma
  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [], []),
    price: new FormControl(0, [], []),
    inStorage: new FormControl(0, [], []), // argumentos son valor por defecto, validaciones síncronas, validaciones asíncronas
  });

  //segunda forma usando FormBuilder
  constructor(private fb: FormBuilder) {}

  //nos ahorramos escribir siempre formControl
  myForm2 = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    price: [0, [Validators.required, Validators.min(0)], []], //si no tiene validaciones seria [0]
    inStorage: [0, [Validators.required, Validators.min(0)], []],
  });

  onSave() {
    if (this.myForm2.invalid) {
      this.myForm2.markAllAsTouched();
      return;
    }
    console.log(this.myForm2.value);

    //re establecer full el formulario
    // this.myForm2.reset()

    //re establecer con propiedades
    this.myForm2.reset({
      price: 20,
      inStorage: 50,
    });
  }

  ngOnInit(): void {
    //usado principalmente de esta forma para usar información del backend
    // this.myForm2.reset({
    // })
  }

  isValidField(field: keyof typeof this.myForm2.controls) {
    return (
      this.myForm2.controls[field].errors &&
      this.myForm2.controls[field].touched
    );
  }

  getFieldErro(field: keyof typeof this.myForm2.controls) {
    if (!this.myForm2.controls[field]) return;

    const errors = this.myForm2.controls[field].errors || {};


    for (const key of Object.keys(errors)) {
      console.log(key)
      switch (key) {
        case 'required':
          return 'este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        default:
          break;
      }
    }
    return null;
  }
}
