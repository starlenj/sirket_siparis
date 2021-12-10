import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppConfig } from '../base/enum/app.config.enum';
import { AppBaseService } from '../base/service/app.base.service';
import { AuthModel } from '../model/auth.model';
import { AppLoginService } from '../service/app.login.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  hide: boolean = true;
  loginForm!: FormGroup;
  constructor(private loginService: AppLoginService, private toastService: ToastrService, private fb: FormBuilder, private router: Router  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
  async login(): Promise<void> {
    try {
      let _loginModel: AuthModel = new AuthModel();
      _loginModel.email = this.loginForm.controls["email"].value;
      _loginModel.password = this.loginForm.controls["password"].value;
      this.loginService.login(_loginModel).subscribe((response) => {
        if (response.success) {
          this.loginService.setLocalStorage(AppConfig.AUTH_TOKEN, response.data);
          this.toastService.success("Kullanici Girisi Basarili", "Yonlendiriliyorsunuz...");
          setTimeout(() => { this.router.navigate(["/home"])},3000)
        }
      });
    } catch (error) {
      console.log("Login Error", error);
    }
  }

}
