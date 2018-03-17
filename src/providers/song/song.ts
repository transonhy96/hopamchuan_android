import { Song } from './../../models/songs.model';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/operator/map';
@Injectable()
export class SongProvider {
song : Song[];
  constructor(public http:Http) {
      
  }
  getSongs(){
    return  this.http.get('https://hopamchuan-api.herokuapp.com/api/songs').map((res: Response)=>{
      let data = res.json();
      return data;
      });
  }
  getTop5(){
    return  this.http.get('https://hopamchuan-api.herokuapp.com/api/songs/top/5').map((res: Response)=>{
      let data = res.json();
      return data;
      });
  } 
  increaseViewCount(song_id: string){
    return  this.http.patch('https://hopamchuan-api.herokuapp.com/api/songs/update_count/'+song_id,{});
  }
}
