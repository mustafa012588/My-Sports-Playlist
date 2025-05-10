import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.component.html'
})
export class LoginComponent {
credentials = { username: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/matches']);
      },
      error: () => this.error = 'Invalid login credentials'
    });
  }
}
