import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  //no siempre se sabe la cantidad de inputs que se van a tener, por ende son dinámicos

  // public myForm2 = new FormGroup ({}
  //favoriteGames: new FormArray ( [])
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    //creamos el arreglo que va a ser dinámico
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
      ['Other game', Validators.required],
    ]),
  });
  constructor(private fb: FormBuilder) {}

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }
    console.log(this.myForm.value)
    this.myForm.reset()
  }

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray
  }

  isValidField(field: keyof typeof this.myForm.controls) {
    return (
      this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }

  isValidFiledInArray(formArray: FormArray, i: number){
    return (
      formArray.controls[i].errors &&
      formArray.controls[i].touched
    );
  }

  getFieldErro(field: keyof typeof this.myForm.controls) {
    if (!this.myForm.controls[field]) return;

    const errors = this.myForm.controls[field].errors || {};


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
