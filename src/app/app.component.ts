

import { Component} from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';





@Component({
  templateUrl: 'app.html'
})
export class MyApp   {
  
 //@ViewChild('roots') nav : NavController;
  rootPage:string = "LoginPage";
  constructor(
                platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                
               
              ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.isLogin= this.auth.checkLoginState();   
      // hoa ra la cung dung` dc kieu nay
      // neu k import Obervable<boolean> thi phai this.auth.checkLoginState().subcribe() de subcribe n :))
      // this.storage.fetchData('UserData')
      // .then((data)=>{
      //   this.preLoadedUser = data;
      //   if(data){
      //     this.rootPage = "HomePage";
      //   }
      //   else{
      //     this.rootPage = "LoginPage";
      //   }
      // });
      statusBar.styleDefault();
      splashScreen.hide();
      
    });

    
  
    
  }

 
}
