import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public user: User = {
    name: '',
    email: '',
    password: ''
  }

  public confirmPass: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.user.password !== this.confirmPass) return;

    this.authService.onRegister(this.user)

    this.router.navigate(['/']);
  }

}
