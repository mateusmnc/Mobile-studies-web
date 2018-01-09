import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { PostService } from './post.service';
import { FriendListService } from './friend-list.service';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { MaybeYouKnowComponent } from './maybe-you-know/maybe-you-know.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MyFriendsComponent,
    MaybeYouKnowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ UserService, PostService, FriendListService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
