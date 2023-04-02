import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.loginForm.getRawValue())
    .then(response => {
      localStorage.setItem('token', response.token)
      this.router.navigate(['/dashboard'])
      alert('User logado')
    }).catch(error => {
      console.log(error)
      alert('Erro, olha no console')
    })
  }

}
