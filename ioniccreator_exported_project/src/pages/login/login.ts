import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFeed(params){
    if (!params) params = {};
    this.navCtrl.push(FeedPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
