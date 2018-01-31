import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PostarJogoPage } from '../pages/postar-jogo/postar-jogo';
import { TrocarJogoPage } from '../pages/trocar-jogo/trocar-jogo';
import { InteressadosPage } from '../pages/interessados/interessados';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PostarJogoPage,
    TrocarJogoPage,
    InteressadosPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostarJogoPage,
    TrocarJogoPage,
    InteressadosPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}