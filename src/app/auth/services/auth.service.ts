import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private user?: User;

  constructor() { }

  onRegister(user: User): void {
    if (!user) return;

    localStorage.setItem('token', JSON.stringify(user))
    this.user = user;
  }

  onLogin(username: string, password: string): void {

    if (!localStorage.getItem('token')) return;

    const token = JSON.parse(localStorage.getItem('token')!);

    if((token.name === username) && (token.password === password))
      this.user = token;
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
