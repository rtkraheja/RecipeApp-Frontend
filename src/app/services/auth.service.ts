import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = false;

  isUserAuthenticated():boolean{

    if(sessionStorage.getItem("currentUserId")===null){
      return this.isLoggedIn
    }
    else{

      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    return true;
    
  }
}
