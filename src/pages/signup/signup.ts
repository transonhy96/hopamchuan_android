import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
//import { CheckLoginStatus } from '../../providers/auth/check_login_status';
import { Validator } from '../../providers/auth/validate';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email: string;
  password: string;
        constructor( private navCtrl : NavController,
                      private auth : AuthProvider,
                      private toastCtrl : ToastController,
                      private validator : Validator,
                      private loading : LoadingProvider) {
  }

  SignUpWithEmail(){
    if(this.email && this.validator.emailValidator(this.email) && this.password)
    {
        this.loading.create('ios','Please wait');
        this.loading.show();
        this.auth.signupWithEmail(this.email,this.password).then(() =>{
        this.loading.close();
        this.navCtrl.pop();
        });
    }
     else{    
       //console.log("Email badly formated");
       let toast = this.toastCtrl.create({
        message: 'Incorrect Credential',
        duration: 3000,
        position: 'bottom',
        cssClass:'toast'
        });
          //this.loading.close();
          toast.present();
          //this.loading.close();
     }
  }

}
