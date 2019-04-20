import { REcipesofthedayPage } from './../r-ecipesoftheday/r-ecipesoftheday';
import { Component } from '@angular/core';
import { NavController,MenuController,Alert,NavParams,AlertController,ToastController } from 'ionic-angular';
// import { AuthProvider } from '../../providers/auth/auth';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  authtoken: any;
  item:any;
  //private _HOST: string = "http://localhost:4201/";
  public password: any;
  public email: any;
  public form: FormGroup;

  constructor(public navCtrl: NavController,public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController,
    // private authProvider: AuthProvider, 
    private alertCtrl: AlertController,
    public menuCtrl: MenuController)
    
  {
    this.menuCtrl.enable(false, 'myMenu');
    this.form = this._FB.group({
      'email': ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      'password': ['', Validators.required]
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail is required.' },
      { type: 'pattern', message: 'Email is incorrect.' }
    ],
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ForgotPassword(){
    this.navCtrl.push(REcipesofthedayPage);
  }
  
  login(){
    this.navCtrl.push(REcipesofthedayPage)
  }

}
