import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {path: 'login' ,component:LoginComponent},
  
  {path: 'dashboard' ,component:MainComponent},
  
  {path: 'dashboard/user',component:UserDashboardComponent,canActivate:[AuthGuard]},

  {path: '',redirectTo:'/dashboard',pathMatch:'full'},

  {path:'**',redirectTo:'/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
