import { StorageProvider } from './../../providers/storage/storage';
import { Users } from './../../models/users.model';
import { Validator } from './../../providers/auth/validate';
import { LoadingProvider } from './../../providers/loading/loading';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController } from 'ionic-angular';



//import { User } from '../../models/users.model';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isLogin : boolean = false;
  email: string;
  password: string;
  isshow :boolean= false;
  isValid : boolean = false;
  SignupPage = 'SignupPage';
  Users: Users;
  
  constructor(
              private navCtrl : NavController,
              private auth : AuthProvider,
              private validator : Validator,
              private loading : LoadingProvider,
              private toastCtrl : ToastController,
             
            ){
      
            this.auth.checkLoginState().subscribe(islogin =>{
            this.isLogin = islogin;
            
       });
       
  }
  
  signInWithFacebook(){
    this.loading.create('ios','Logging in');
    this.loading.show();
    this.auth.signInWithFacebook_()
    .then((resolve)=>{
      this.Users = resolve;
      this.loading.close();
      this.isLogin = !this.isLogin;
     // this.checkloginStatus.updateStatus(true);
      this.navCtrl.setRoot('HomePage',{Users:this.Users});
      
    });
  }

  show(){
    console.log('im here');
    this.isshow = true;
  }
  tosignupPage(){
    this.navCtrl.push('SignupPage');
  }
  
  validate(){
   
    
    if(this.email && this.password && this.validator.emailValidator(this.email)){
    
        
    }
    else 
    {
      this.isValid = true;
    }
    
    
  }
  LogInWithEmail(){
    this.loading.create('ios','Logging in');
    this.loading.show();
    if(this.isValid)
    {
        try {
          this.auth.loginWithEmail(this.email,this.password).then((response : Response) =>{
            console.log(response);
            this.isLogin = !this.isLogin;
            this.loading.close();
            this.navCtrl.setRoot("HomePage");
              });
             } 
        catch (error) {
          let toast = this.toastCtrl.create({
            message: 'Incorrect Credential',
            duration: 3000,
            position: 'bottom',
            cssClass:'toast'
          });
          this.loading.close();
          toast.present();
        }
    }
     else{    
      let  toast = this.toastCtrl.create({
        message: 'Incorrect Credential',
        duration: 3000,
        position: 'bottom',
        cssClass:'toast'
      });
       this.loading.close();
       toast.present();
       
     }
  }
}
