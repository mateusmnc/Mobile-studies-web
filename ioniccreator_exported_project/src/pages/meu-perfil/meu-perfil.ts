import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FeedPage } from '../feed/feed';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-meu-perfil',
  templateUrl: 'meu-perfil.html'
})
export class MeuPerfilPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToFeed(params){
    if (!params) params = {};
    this.navCtrl.push(FeedPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
