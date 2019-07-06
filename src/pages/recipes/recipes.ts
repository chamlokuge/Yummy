import { SuggestionsPage } from './../suggestions/suggestions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
  
})
// class SearchPage {

//   searchQuery: string = '';
//   items: string[];

//   constructor() {
//     this.initializeItems();
//   }
//   initializeItems() {
//     this.items = [
//       'Dal Fry',
//       'Chicken Basquaise',
//       'Lasagne',
//       'Kapsalon',
//       'Pancakes',
//       'Carrot Cake',
//       'Dundee cake',
//       'Parkin cake',
//       'Ratatoulite',
//       'Chicken Handi',
//       'Chicken Congee',
//       'Chicken Karaage',
//       'Tandoori chicken',
//       'Chicken Marengo',
//       'Chicken Couscous',
//       'Kung Pao Chicken',

//     ];
//   }

//   getItems(ev: any) {
//     // Reset items back to all of the items
//     this.initializeItems();

//     // set val to the value of the searchbar
//     const val = ev.target.value;

//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       })
//     }
//   }
// }
export class RecipesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  goToSuggestions(){
    this.navCtrl.push(SuggestionsPage)
  }

}
