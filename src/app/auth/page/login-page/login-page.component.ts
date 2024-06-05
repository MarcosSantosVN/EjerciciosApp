import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  public user: User = {
    name: '',
    email: '',
    password: ''
  }


  constructor(private authService: AuthService, private router: Router) { }

  login() {

    this.authService.onLogin(this.user.name, this.user.password)

    this.router.navigate(['/']);
  }
}
