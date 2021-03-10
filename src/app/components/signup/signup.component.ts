import { Component, Inject, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators,ValidationErrors } from  '@angular/forms';
import { Subscriber } from 'rxjs';
import {UserService} from "../../services/user.service"
import { Router } from "@angular/router";
import {MatDialogRef, MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userInfo: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private spinner:NgxSpinnerService,
    public dialogRef:MatDialogRef<SignupComponent>

    ) { }

    imgURL: any;
    show:any="none";
    OnUserInfoSubmit() {
      this.spinner.show();
      this.userService.addUserData(this.userInfo.value).subscribe((data:any)=>{
        this.spinner.hide();
       

        this.toastr.success("User Register Successfully","Success",{timeOut:3000});
        this.closeDialog();

        setTimeout(() => {
          setTimeout(() => {
            this.router.navigateByUrl("/login");
          });
        }, 1000);
        
        

       
        
      },(err)=>{

        this.spinner.hide();
        if(err) {

          this.toastr.error(err.error.error,err.error.status,{
            timeOut:2000
          })

        }
        else{

          this.toastr.error("Something went wrong","Error: ",{timeOut:3000});
        }
      });
      
    }

    closeDialog() {
      this.dialogRef.close();
    }
    onFileSelect(event){
      if(event.target.files.length > 0 ) {

        const file = event.target.files[0];

        var reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = (_event) => { 
        this.imgURL = reader.result; 
        this.show="block"
        this.userInfo.get('profileImage').setValue(file);


      }
        
    }
  }


  ngOnInit(): void {

    this.userInfo = this.formBuilder.group({
      profileImage:['',[Validators.required]],
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      userId:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]

    })
  }

}
