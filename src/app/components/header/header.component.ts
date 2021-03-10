import { Component, OnInit,Inject } from '@angular/core';
import { Router } from "@angular/router";
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
//import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(//@Inject(MAT_DIALOG_DATA) public data,
  private Router:Router,private Dialog: MatDialog,
    public dialog: MatDialog,
    //public dialogRef:MatDialogRef<HeaderComponent>
    ) { }
  redirectToLoginPage() {

    this.Router.navigateByUrl("/login");

   
  }

  redirectToHomePage() {

    this.Router.navigateByUrl("/dashboard");

   
  }

  

  redirectToSignupPage() {
    const dialogRef = this.Dialog.open(SignupComponent,{
      width: '600px',
      height: '600px'

    });
    //this.Router.navigateByUrl("/signup");
  }
  

  ngOnInit(): void {
  }

}
