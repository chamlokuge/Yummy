import { GetrecipepagePage } from './../pages/getrecipepage/getrecipepage';
import { SuggestionsPage } from './../pages/suggestions/suggestions';
import { HereAreSomeSuggestionsPage } from './../pages/here-are-some-suggestions/here-are-some-suggestions';
import { FavouritesPage } from './../pages/favourites/favourites';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http'; 
import { REcipesofthedayPage } from '../pages/r-ecipesoftheday/r-ecipesoftheday';
import { RecipesPage } from '../pages/recipes/recipes';
import { RegisterPage } from '../pages/register/register';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritesPage,
    REcipesofthedayPage,
    HereAreSomeSuggestionsPage,
    RecipesPage,
    RegisterPage,
    SuggestionsPage,
    GetrecipepagePage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritesPage,
    REcipesofthedayPage,
    HereAreSomeSuggestionsPage,
    RecipesPage,
    RegisterPage,
    SuggestionsPage,
    GetrecipepagePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
