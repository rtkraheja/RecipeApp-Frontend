import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import {UserService} from "../../services/user.service"
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  recipeData:any=[];
  
  constructor(private UserService:UserService,
    private spinner: NgxSpinnerService,
    
    private toastr: ToastrService) {
    
  }

  

  ngOnInit(): void {

    this.spinner.show();
    this.UserService.getRecipeData().subscribe(data=>{
    
     this.spinner.hide();
     this.recipeData=data["hits"];
   
      
    },(err)=> {

      
      this.spinner.hide()
      if(err.error) {
        this.toastr.error(err.name,err.statusText,{timeOut:3000});
      }
      else{

        this.toastr.error("Something went wrong","Error: ",{timeOut:3000});
      }

    });
    
  }

}
