import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule }  from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component'
import {ToastrModule} from 'ngx-toastr';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
    LoginComponent,
    SignupComponent,
    MainComponent,
    UserDashboardComponent,
    FavouritesComponent,
    RecommendationComponent,
    RecipeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule

  ],
  entryComponents :[LoginComponent,SignupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
