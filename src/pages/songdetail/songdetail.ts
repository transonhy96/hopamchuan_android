import { StorageProvider } from './../../providers/storage/storage';
import { FavoriteProvider } from './../../providers/favorite/favorite';
import { Song } from './../../models/songs.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-songdetail',
  templateUrl: 'songdetail.html',
})
export class SongDetailPage implements OnInit {
  song: Song;
  randColor: string;
  myArrayColor: string[] = ['primary','secondary','danger','hi','twitter'];
  icon_name: string;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private popOverCtrl: PopoverController,
               private favoriteProvider : FavoriteProvider,
               private storage : StorageProvider
              ) {
    
  }
  ionViewWillEnter(){
   this.song= this.navParams.get('Song');
   

   
  }
  ngOnInit(){
    this.randColor = this.myArrayColor[Math.floor(Math.random()*this.myArrayColor.length)]; 
    this.song= this.navParams.get('Song');
    //this.storage.fetchData('favorite').then((data : Array<string>)=>{
    //   console.log(data);
      
    //     if(data.length == 0) {
    //       this.icon_name = 'heart_outline';
    //     console.log(1);
    //     }
    //     else{
    //       console.log(2);
    //       console.log(this.song._id);
          
    //      for(var i=0;i<data.length;i++){

    //       if(data[i]===this.song._id) console.log(data[i]);
    //       else{
    //         this.icon_name = 'heart_outline';
    //         console.log(data[i]);
    //       }
    //      }
       
    //     }
    // });
  }
  ionViewWillLeave(){
   
   
  }
  showChord(chord : any){
    let chordPopover = this.popOverCtrl.create('ModalWarningPage',{chord:chord});
    chordPopover.present();
  }
  favorite(){
    this.favoriteProvider.saveFavorite(this.song._id);
  }
}
