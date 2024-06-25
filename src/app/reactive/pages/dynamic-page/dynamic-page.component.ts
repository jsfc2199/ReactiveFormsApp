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
}
