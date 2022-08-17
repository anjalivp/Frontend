import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address: string = 'api';
 
  constructor(private http:HttpClient) { } 

  getToken() {
    return localStorage.getItem('token');
  }

  

  loginUser(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user);
    }


signupUser(user: any){
     return this.http.post<any>(`${this.server_address}/signup`,user);
   }

loggedIn(){
  return !!localStorage.getItem('token')
}

  
}
