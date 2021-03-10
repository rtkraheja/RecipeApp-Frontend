import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormGroup, FormBuilder,Validators} from  '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import {RecipeModel} from "../../models/RecipeModel";



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

 

  searchInfo: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr:ToastrService ,

    private userService: UserService) { }

  User:any={};
  firstName:String;
  lastName:String;

  query:String="";
  
  show:boolean=true;
  searchView:any;
  defaultView:any;


 
  


  logoutHandler() {

    sessionStorage.removeItem("currentUserId");
    sessionStorage.removeItem("currentUserFname");
    sessionStorage.removeItem("currentUserLname");

    this.userService.logout().subscribe((data)=> {

      this.toastr.success("User Logout","success",{
        timeOut:1500
      })

    });
   
    setTimeout(() => {
      setTimeout(() => {
        this.router.navigateByUrl("/dashboard");
      });
    }, 1000);
    
  }


  addToFavouriteHandler(recipeDetails){
    let favModel:RecipeModel={
      recipeId:recipeDetails.recipe.uri,
      recipeImage:recipeDetails.recipe.image,
      recipeName:recipeDetails.recipe.label,
      recipeTitle:recipeDetails.recipe.url
    }  
    this.userService.addToFavourites(favModel).subscribe((data)=> {
      this.userService.favMessage(data)

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
    this.userService.addToRecommend(rcmdModel).subscribe((data)=> {
      this.userService.rcmdMessage(data);
      this.toastr.success("Marked as recommended","success",{timeOut:2000});
    },(err)=>
    {

      if(err) {
        this.toastr.error("Already marked as recommended","Error: ",{timeOut:3000});
        }

      
 

    });
    
  }

  goToRecipe(url:string){

    window.open(url,"_blank");
  }
  

  recipeData:any=[];
  OnUserQuerySubmit() {
  
    this.show = false;
    this.spinner.show();
    this.userService.getSearchData(this.searchInfo.value.search).subscribe((message:any)=>{
      //console.log(message);
      this.spinner.hide();
      this.recipeData=message["hits"];
    
    });
  }


  
  
 
  



  

 

  userPic:String;
  

  ngOnInit(): void {


    this.firstName=JSON.parse(sessionStorage.getItem("currentUserFname"));
    this.lastName=JSON.parse(sessionStorage.getItem("currentUserLname"));

    this.userPic = JSON.parse(sessionStorage.getItem("currentUserPic"));
    this.searchInfo = this.formBuilder.group({
     
      search:['',[Validators.required]]

    })
   

    
  }
}