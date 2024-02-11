import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrl: './updatepopup.component.css',
})
export class UpdatepopupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dailog: MatDialogRef<UpdatepopupComponent>
  ) {}
  editData: any;
  roleList: any;
  ngOnInit(): void {
    this.service.GetAllRole().subscribe((result) => {
      this.roleList = result                  ;
    });
    if (this.data.usercode != null || this.data.usercode != '') {
      this.service.GetbyCode(this.data.usercode).subscribe((result) => {
        this.editData = result;
        this.registrationform.setValue({
          id: this.editData.id,
          name: this.editData.name,
          password: this.editData.password,
          email: this.editData.email,
          gender: this.editData.gender,
          role: this.editData.role,
          isactive: this.editData.isactive
        })
      });
    }
  }
  registrationform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control(''),
    role: this.builder.control('', Validators.required),
    isactive: this.builder.control(false),
  });
  UpdateUser() {
    if(this.registrationform.valid)
    {
      this.service.Updateuser(this.registrationform.value.id,this.registrationform.value).subscribe((result)=>{
        this.toastr.success('Updated Successfully')
        this.dailog.close()
      })
    }else{
      this.toastr.warning('Please Select Role')
    }
  }
}
