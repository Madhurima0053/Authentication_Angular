import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7284/api/User/"
  constructor(private http : HttpClient) { }

  signUp(value:any){
    return this.http.post<any>(`${this.baseUrl}`,value)
  }

  login(loginobj:any){
    return this.http.post<any>("https://localhost:7284/api/User/Signin",loginobj)
  }
}
