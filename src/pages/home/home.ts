import { Song } from './../../models/songs.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, Events, NavParams, MenuController, AlertController, NavController, Platform } from 'ionic-angular';

import { Users } from '../../models/users.model';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingProvider } from '../../providers/loading/loading';
import {Subscription} from 'rxjs/Subscription';
import { SongProvider } from '../../providers/song/song';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Shake } from '@ionic-native/shake';

@IonicPage()  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit,OnDestroy {

  topsongs:Song[];
  OtherPage="LoginPage";
  Users: Users;
  isLogin: boolean;
  subscription: Subscription;
  searchSong: string;
 
  constructor(
    private shake : Shake,
    public events : Events,
    private NavParams: NavParams,
    private menuCtrl: MenuController,
    private alertCtrl : AlertController,
    private auth: AuthProvider,
    private loading : LoadingProvider,
    private navCtrl : NavController,
    private songProvider : SongProvider,
    private platform : Platform,
  ){
      this.platform.ready().then(()=>{
          this.shake.startWatch(40).subscribe(()=>{
            this.songProvider.getTop5().subscribe((song)=>{
              this.topsongs = song;
              
            });
          });
      });
      this.Users = this.NavParams.get('Users');   
  }
  ngOnInit(){
    
  }
  doRefresh(refresher){
    
    this.songProvider.getTop5().toPromise().then((songs)=>{
        this.topsongs =songs;
        refresher.complete();
    });
   
  
  }
  ionViewWillEnter(){
    this.songProvider.getTop5().subscribe((song)=>{
      this.topsongs = song;
      
    });
   
  }
  onInput(event: any){
    console.log(this.searchSong);
    
  }
  onCancel(event : any){
      console.log('cancel');

  }
  onload(page : string){
    this.navCtrl.push(page);
    this.menuCtrl.close();
  }
  goDetail(song: Song){
    console.log(song._id);
    this.songProvider.increaseViewCount(song._id).subscribe();
    this.navCtrl.push('SongDetailPage',{Song: song});
    
  }
  logout(){
    
            this.menuCtrl.close();
            //Create loading view
            this.loading.create('ios','');
            //Create alert
            let alert = this.alertCtrl.create({
              title: 'You are about to log out',
              message: 'Are you sure?',
              buttons: [
                {
                  text: 'Yes',
                  handler: () => {
                    this.loading.show()
                    .then(()=>{
                      this.auth.logout();
                    })
                    .then(()=>{
                      this.loading.close();
                      this.navCtrl.setRoot('LoginPage');
                    });
                  }
                },
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancle');
                  }
                }
              ]
            });
            //Neu login r thi ms log out
            if(this.isLogin){
              alert.present();
            }
      }
  OpenMenu(){
   // this.events.publish('menu:opened');

    this.subscription = this.auth.checkLoginState().subscribe((islogin)=>{
      this.isLogin = islogin;
        });
    
    
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
