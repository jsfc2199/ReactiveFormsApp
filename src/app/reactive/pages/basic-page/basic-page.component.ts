import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  })

  //segunda forma usando FormBuilder
  constructor(private fb: FormBuilder){}

  //nos ahorramos escribir siempre formControl
  myForm2 = this.fb.group({
    name: ['', [], []],
    price: [0, [], []], //si no tiene validaciones seria [0]
    inStorage: [0, [], []],
  })

  onSave(){
    console.log(this.myForm2.value);

  }
}
