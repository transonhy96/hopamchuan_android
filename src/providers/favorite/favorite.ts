import { StorageProvider } from './../storage/storage';

import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class FavoriteProvider implements OnInit {
  favoritesSong : string[]= [];

  constructor(
              private StorageProvider: StorageProvider
              ) {
    
  }
  ngOnInit(){
    this.StorageProvider.fetchData('favorite')
    .then((data)=>{
      this.favoritesSong = data;
    });
  }
  saveFavorite(song_id : string){
    if(this.favoritesSong.length ==0){
      this.favoritesSong.push(song_id);
      let data = JSON.stringify(this.favoritesSong);
      this.StorageProvider.storeData('favorite',data);
    }
    else{
      this.favoritesSong.forEach((i)=>{
        if(i===song_id) {
          this.favoritesSong.slice(this.favoritesSong.indexOf(i),1);
          
        }
        else{
          this.favoritesSong.push(song_id);
          
        }
      });
       let data = JSON.stringify(this.favoritesSong);
      this.StorageProvider.storeData('favorite',data);
    }
            
    
  }
  
}
