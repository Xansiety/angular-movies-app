import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ImagesConst } from '../../../../assets/properties/images.const';
import { AlertService } from '../../../shared/services/alert-service.service';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login.model';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public readonly Images = ImagesConst;
  public value4?: string;

  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      for (const key in this.loginForm.controls) {
        (this.loginForm.controls as { [key: string]: any })[key].markAsDirty();
      }
      this.alertService.showError(
        'Error',
        'Check your data and fill the required fields'
      );
      return;
    }

    const payload: LoginRequest = {
      username: this.loginForm.get('username')!.value,
      password: this.loginForm.get('password')!.value,
    };

    this.authService.login(payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.alertService.showError('Error', error.message);
      },
    });
  }
}
