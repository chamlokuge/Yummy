import { GetrecipepagePage } from './../getrecipepage/getrecipepage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SuggestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggestions',
  templateUrl: 'suggestions.html',
})
export class SuggestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestionsPage');
  }

  getrecipe(){
    this.navCtrl.push(GetrecipepagePage)
  }

}
