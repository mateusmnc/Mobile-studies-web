import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FeedPage } from '../pages/feed/feed';
import { AmigosPage } from '../pages/amigos/amigos';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PostPage } from '../pages/post/post';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    AmigosPage,
    MeuPerfilPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    PostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    AmigosPage,
    MeuPerfilPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}