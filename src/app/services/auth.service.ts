import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000/user';
  GetAll() {
    return this.http.get(this.apiurl);
  }
  GetbyCode(code: any) {
    return this.http.get(this.apiurl + '/'+ code);
  }
  ProceedRegister(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  Updateuser(code:any,inputdata: any) {
    return this.http.put(this.apiurl+'/'+code, inputdata);
  }

  isLoggedIn()
  {
    return sessionStorage.getItem('username')!=null;
  }
  GetUserRole()
  {
    return sessionStorage.getItem('username')!=null?sessionStorage.getItem('userrole')?.toString(): '';
  }  
  GetAllRole() {
    return this.http.get('http://localhost:3000/role');
  }
}
