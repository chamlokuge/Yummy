import { GetrecipepagePage } from './../pages/getrecipepage/getrecipepage';
import { SuggestionsPage } from './../pages/suggestions/suggestions';
import { FavouritesPage } from './../pages/favourites/favourites';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { REcipesofthedayPage } from '../pages/r-ecipesoftheday/r-ecipesoftheday';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      { title: 'Recipes', component: RecipesPage },
      { title: 'Favourites', component: FavouritesPage },
      { title: 'Suggestions', component: SuggestionsPage },
      { title: 'Recipes of the Day', component: REcipesofthedayPage },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }
}
