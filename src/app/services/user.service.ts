import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders}  from '@angular/common/http';
import { AddUserModel } from '../models/AddUserModel';
import { Observable ,BehaviorSubject} from 'rxjs';
import { RecipeModel } from '../models/RecipeModel';

@Injectable({
  providedIn: 'root'
})



export class UserService {

  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();


  private FavouriteSource = new BehaviorSubject({});
  favouriteMessage = this.FavouriteSource.asObservable();

  private RcmdSource = new BehaviorSubject({});
  rcmdiMessage = this.RcmdSource.asObservable();


  changeMessage(message:any) {
    this.messageSource.next(message);
  }

  favMessage(message:any) {
    this.FavouriteSource.next(message);
  }

  rcmdMessage(message:any) {
    this.RcmdSource.next(message);
  }


  
  constructor(private http:HttpClient) { 
  }

  
  
  addToFavourites(bodyData:RecipeModel) {

    

    
    const headers = { 'Content-Type': 'application/json' }
    let apiUrl = "http://localhost:8080/api/v1/auth/addFav";
    return this.http.post<RecipeModel>(apiUrl,bodyData,{'headers':headers,withCredentials:true}); 

  }

  getFavourites(userId:String) {
    
    const headers = { 'Content-Type': 'application/json' }
    let apiUrl = "http://localhost:8080/api/v1/auth/all/fav/"+userId;
    return this.http.get(apiUrl,{'headers':headers,withCredentials:true}); 

  }


  deleteFromFavourites(recipeId:String) {

   
    //const headers = { 'Content-Type':'text/html' };
    let apiUrl = "http://localhost:8080/api/v1/auth/deleteFav/"+recipeId;
    return this.http.delete(apiUrl,{withCredentials:true}); 

  }




  addToRecommend(bodyData:RecipeModel) {

    

    
    const headers = { 'Content-Type': 'application/json' }
    let apiUrl = "http://localhost:8080/api/v1/auth/addRecommend";
    return this.http.post<RecipeModel>(apiUrl,bodyData,{'headers':headers,withCredentials:true}); 

  }

  getRecommend(userId:String) {
    
    const headers = { 'Content-Type': 'application/json' }
    let apiUrl = "http://localhost:8080/api/v1/auth/all/rcmd/"+userId;
    return this.http.get(apiUrl,{'headers':headers,withCredentials:true}); 

  }


  deleteFromRecommend(recipeId:String) {

   
    //const headers = { 'Content-Type':'text/html' };
    let apiUrl = "http://localhost:8080/api/v1/auth/deleteRecommend/"+recipeId;
    return this.http.delete(apiUrl,{withCredentials:true}); 

  }


  getSearchData(query:String) {
    let apiUrl = 'https://api.edamam.com/search?q='+query+'&app_id=68fa0ddd&app_key=01f301c4215cf4ed9762d0777af9d119'
    return this.http.get(apiUrl); 
  }

  getRecipeData() {
   
    let apiUrl = "https://api.edamam.com/search?q=pasta&app_id=68fa0ddd&app_key=01f301c4215cf4ed9762d0777af9d119"
    return this.http.get(apiUrl); 
  }


  addUserData(bodyData:any) {

    

    const  formData = new FormData();
    formData.append('userId',bodyData.userId)
    formData.append('firstName',bodyData.firstName);
    formData.append('lastName',bodyData.lastName);
    formData.append('password',bodyData.password);
    formData.append('profileImage',bodyData.profileImage);

   

    let apiUrl = "http://localhost:8080/api/v1/auth/register";
    return this.http.post(apiUrl,formData); 


  }

  getUserData(bodyData:any) {
    var my = JSON.stringify(bodyData);
    const headers = { 'Content-Type': 'application/json' }
    let apiUrl = "http://localhost:8080/api/v1/auth/login";
    return this.http.post<AddUserModel>(apiUrl,my,{'headers':headers,withCredentials:true}); 
  }

  logout() {
   
    const headers = { 'Content-Type': 'application/json' }
    let apiUrl="http://localhost:8080/api/v1/auth/logout";
    return this.http.get(apiUrl,{'headers':headers,withCredentials:true}); 
  }
  
}
