import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string[] = Array(3).fill('gray');
  showPassword: boolean = false;

  updateStrength() {
    const length = this.password.length;

    if (length === 0) {
      this.strength = Array(3).fill('gray');
    } else if (length < 8) {
      this.strength = Array(3).fill('red');
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[-!@#$%^&*()_+{}\[\]:;<>,.?~\\=]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.strength = Array(3).fill('green');
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        this.strength = ['yellow', 'yellow', 'gray'];
      } else {
        this.strength = ['red', 'gray', 'gray'];
      }
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
