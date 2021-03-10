import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service'; 
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService:AuthService,private router:Router) {}


  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {


    if(this.authService.isUserAuthenticated()) {
      return true;
    }
    this.router.navigateByUrl("/dashboard");
    return false;
  }
}