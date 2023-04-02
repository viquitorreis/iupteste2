import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      phone: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.value.password !== this.registerForm.value.confirm_password) {
      return alert('Coloca uma senha igual')
    }

    this.registerService.register(this.registerForm.getRawValue()).then(response => {
      console.log(response)
      this.router.navigate(['/login'])
      alert('User criado')
    }).catch(error => {
      console.log(error)
      alert('Erro, olha no console')
    })
  }

}
