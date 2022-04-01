import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserP } from '../models/userpass';
import { UserData } from '../models/userdata';
import { UserRC } from '../models/userrole';
import { UserPost } from '../models/userpost';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:5000/api/usuario';

  constructor(private http: HttpClient) { }

  getuseresp(IDusuario: any){
    return this.http.get(`${this.url}/user?IDusuario=${IDusuario}`)
  }

  getuserall(){
    return this.http.get(this.url)
  }

  getuserACT(){
    return this.http.get(`${this.url}/ACT`)
  }

  getuserINA(){
    return this.http.get(`${this.url}/INA`);
  }

  deleteuserINA(IDusuario: any){
    return this.http.delete(`${this.url}/borrar?IDusuario=${IDusuario}`);
  }

  deleteREAC(IDusuario: any){
    return this.http.delete(`${this.url}/REAC?IDusuario=${IDusuario}`);
  }

  putdatauser(IDusuario: any,user: UserData){
    return this.http.put(`${this.url}?IDusuario=${IDusuario}`,user);
  }

  postuser(user: UserPost){
    return this.http.post(`${this.url}`,user);
  }

  putpassword(IDusuario: any,user: UserP){
    return this.http.put(`${this.url}/pass?IDusuario=${IDusuario}`,user);
  }

  putrole(IDusuario: any,user: UserRC){
    return this.http.put(`${this.url}/CR?IDusuario=${IDusuario}`,user);
  }

}
