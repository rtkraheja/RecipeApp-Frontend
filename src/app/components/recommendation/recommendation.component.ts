import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  
  recipeData:any;
  newrecipeData:any=[];
  userId = JSON.parse(sessionStorage.getItem("currentUserId"));
  constructor(
    private UserService: UserService,
    private toastr:ToastrService ,
    private spinner: NgxSpinnerService) { }


    deleteRcmdHandler(recipe) {
     let rId= recipe.id
     this.UserService.deleteFromRecommend(rId).subscribe((data)=> {
      this.toastr.success("Recipe Removed","success",{timeOut:2000});
      this.ngOnInit();
      

     });


    }

    goToRecipe(url:string){

      window.open(url,"_blank");
    }

    
  
    ngOnInit(): void {
  
      
      this.UserService.getRecommend(this.userId).subscribe((data:any)=> {
        
        this.recipeData=data;
        

      });

     
      this.UserService.rcmdiMessage.subscribe((data:any)=> {
        this.recipeData=data;

      });

     
       
    }


   

}
