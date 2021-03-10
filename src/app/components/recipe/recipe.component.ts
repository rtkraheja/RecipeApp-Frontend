import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {UserService} from "../../services/user.service"
import { ToastrService } from "ngx-toastr";
import {RecipeModel} from "../../models/RecipeModel";
import {FavouritesComponent} from "../favourites/favourites.component";
import { Router } from "@angular/router";
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeData:any=[];

 
  
  constructor(private UserService:UserService,
    private spinner: NgxSpinnerService,
   private toastr: ToastrService,
   private router:Router

   
    ) {
    
  }

  
  addToFavouriteHandler(recipeDetails){
    let favModel:RecipeModel={
      recipeId:recipeDetails.recipe.uri,
      recipeImage:recipeDetails.recipe.image,
      recipeName:recipeDetails.recipe.label,
      recipeTitle:recipeDetails.recipe.url
    }  
    this.UserService.addToFavourites(favModel).subscribe((data)=> {
      this.UserService.favMessage(data)

      this.toastr.success("Marked as Favourite","success",{timeOut:2000});
      
    },(err)=>
    {

      if(err) {
        this.toastr.error("Already marked as favourite","Error: ",{timeOut:3000});
        }

      
 

    });

  
    
    
  }



  addToRecommendHandler(recipeDetails){
    let rcmdModel:RecipeModel={
      recipeId:recipeDetails.recipe.uri,
      recipeImage:recipeDetails.recipe.image,
      recipeName:recipeDetails.recipe.label,
      recipeTitle:recipeDetails.recipe.url
    }
    this.UserService.addToRecommend(rcmdModel).subscribe((data)=> {
      this.UserService.rcmdMessage(data);
      this.toastr.success("Marked as recommended","success",{timeOut:2000});
    },(err)=>
    {

      if(err) {
        this.toastr.error("Already marked as recommended","Error: ",{timeOut:3000});
        }

      
 

    });
    
  }



  status=false;
  checkLike() {
    this.status=!this.status;
  }

  goToRecipe(url:string){

    window.open(url,"_blank");
  }
  

  ngOnInit(): void {

    this.spinner.show();
    this.UserService.getRecipeData().subscribe(data=>{
     this.recipeData=data["hits"];
     this.spinner.hide();
    }


    ,(err)=> {

      
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
