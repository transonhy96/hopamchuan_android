

import { Users } from './../../models/users.model';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { User } from 'firebase';
import { Facebook } from '@ionic-native/facebook';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { Response } from '@angular/http';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { StorageProvider } from './../storage/storage';


@Injectable()
export class AuthProvider {
  User : Observable<User>;
  Users :Users;

  constructor(private afDB: AngularFireDatabase,
              private afAuth : AngularFireAuth,
              private facebook : Facebook,
              private platform : Platform,
              private storage : StorageProvider
            ) {
    
  }
 
  signInWithFacebook_(){
     if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
      .then((resolve)=>{
        this.Users= resolve;
        this.storage.storeData('UserData',resolve);
     
       
       
        
        return this.Users;
        
      });
    }
    else {
      // For testing on chrome only
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((resolve) => {
          this.Users = resolve;
          this.storage.storeData('UserData',resolve);
          return this.Users;
        });
    }
  }
  signupWithEmail(email : string , password: string){
       return  firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  loginWithEmail(email :string , password :string){
      return firebase.auth().signInWithEmailAndPassword(email,password).then().catch(err => err);
  }

  checkLoginState(){
   return  this.afAuth.authState.map((res: User)=>{
      
      if(!res) return false
      return true
   });
  }



  logout(){
    firebase.auth().signOut();
    this.afAuth.auth.signOut();
    
  }
  
}
