import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-formulario3',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component {

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })


}
