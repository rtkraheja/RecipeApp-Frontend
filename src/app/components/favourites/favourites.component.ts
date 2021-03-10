import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  recipeData:any;
  newrecipeData:any=[];
  userId = JSON.parse(sessionStorage.getItem("currentUserId"));
  constructor(
    private UserService: UserService,
    private toastr:ToastrService ,
    private router:Router,
    private spinner: NgxSpinnerService) { }


    deleteFavHandler(recipe) {

     let rId=recipe.id
     this.UserService.deleteFromFavourites(rId).subscribe((data)=> {
      
      this.toastr.success("Recipe Removed","success",{timeOut:2000});
      this.ngOnInit();
     });
     
     

     



    }
    goToRecipe(url:string){

      window.open(url,"_blank");
    }
    

    newArr:any;
  
    ngOnInit(): void {

      this.UserService.getFavourites(this.userId).subscribe((data:any)=> {
        this.recipeData=data;

      });

      this.UserService.favouriteMessage.subscribe((data:any)=> {
        this.recipeData=data;

      });

    

    

      

      
       
    }


   

}
