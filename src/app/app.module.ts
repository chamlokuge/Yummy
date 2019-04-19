import { DayRecipePage } from './../pages/day-recipe/day-recipe';
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
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritesPage,
    REcipesofthedayPage,
    DayRecipePage
    
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
    DayRecipePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
