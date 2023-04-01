import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      phone: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('hey wassup')
  }

}
