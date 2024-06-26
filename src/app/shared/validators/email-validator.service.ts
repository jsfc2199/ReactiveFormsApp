import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor() {}
  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === 'juan@juan.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete(); //se desuscribe
        }

        subscriber.next(null); //haciendo referencia de que no está tomado el correo
        subscriber.complete(); //se desuscribe
      }
    ).pipe(
      delay(300) //hacemos delay para simular la asincronía
    );

    return httpCallObservable;
  }
}
