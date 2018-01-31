import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AmigosPage } from '../amigos/amigos';
import { MeuPerfilPage } from '../meu-perfil/meu-perfil';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FeedPage;
  tab2Root: any = AmigosPage;
  tab3Root: any = MeuPerfilPage;
  constructor(public navCtrl: NavController) {
  }
  
}
