import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from  '@angular/forms';
import {UserService} from "../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
    



    ) { }


    OnUserInfoSubmit() {
      


      this.userService.getUserData(this.userInfo.value).subscribe((data)=>{

       //console.log(data);
         this.userService.changeMessage({
          'user':data
        })
        sessionStorage.setItem("currentUserId",JSON.stringify(data.userId));
        sessionStorage.setItem("currentUserFname",JSON.stringify(data.firstName));
        sessionStorage.setItem("currentUserLname",JSON.stringify(data.lastName));

        sessionStorage.setItem("currentUserPic",JSON.stringify(data['profileImage']));
        
        this.toastr.success("User Login Successfully","success",{
          timeOut:1500
        })

        setTimeout(() => {
          setTimeout(() => {
            this.router.navigateByUrl("/dashboard/user");
          });
        }, 1000);
      
        

      },(err)=>{

        if(err) {

          this.toastr.error(err.error,err.error.status,{
            timeOut:2000
          })

        }
        else{

          this.toastr.error("Something went wrong","Error: ",{timeOut:3000});
        }
        


        

      });

       
    }

  ngOnInit(): void {

    this.userInfo = this.formBuilder.group({
     
      userId:['',[Validators.required]],
      password:['',[Validators.required]],

    })
  }

}
