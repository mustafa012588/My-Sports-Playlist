import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user = { username: '', password: '' };
  error = '';
  success = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    console.log(this.user);

    this.auth.register(this.user).subscribe({
      next: () => {
        this.success = 'Registration successful! You can now login.';
        this.error = '';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: () => {
        this.error = 'Registration failed.';
        this.success = '';
      }
    });
  }
}
