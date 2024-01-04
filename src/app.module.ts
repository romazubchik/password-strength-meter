import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { PasswordStrengthComponent } from './app/password-strength/password-strength.component';
import { environment } from './environments/environment'; // Додайте цей імпорт

@NgModule({
  declarations: [AppComponent, PasswordStrengthComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: 'APP_CONFIG', useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
