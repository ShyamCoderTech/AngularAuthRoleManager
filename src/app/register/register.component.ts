import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit{
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
   
  }

  registrationform = this.builder.group({
    id: this.builder.control('',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('',
      Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'),
      ])
    ),
    email: this.builder.control('',
      Validators.compose([Validators.required, Validators.email])
    ),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(true),
  });

  proceedRegistration() {
    if (this.registrationform.valid) {
      this.service
        .ProceedRegister(this.registrationform.value)
        .subscribe((result) => {
          this.toastr.success(
            'Please contact Admin for enable access',
            'Registered Successfully'
          );
          this.router.navigate(['login']);
        });
    } else {
      this.toastr.warning('Please Enter Valid Data');
    }
  }
}
