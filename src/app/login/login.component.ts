import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService,
    private toastr: ToastrService
  ) {
    sessionStorage.clear();
    
  }

  userData: any;
  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedLogin() {
    if (this.loginform.valid) {
      this.service.GetbyCode(this.loginform.value.username).subscribe((result) => {
            this.userData = result;
            console.log('Retrieved User Data:', this.userData);
            console.log('Entered Password:', this.loginform.value.password);
            console.log('Stored Password:', this.userData.password);
            if (this.userData.password === this.loginform.value.password) {
              if (this.userData.isactive) {
                sessionStorage.setItem('username', this.userData.id);
                sessionStorage.setItem('userrole', this.userData.role);
                this.router.navigate(['']);
                this.toastr.success("Welcome to Dashboard");
              } else {
                this.toastr.error("Please Contact Admin", "InActive User");
              }
            } else {
              this.toastr.error("Invalid Credentials");
            }
          }
        );
    }
  }
}
