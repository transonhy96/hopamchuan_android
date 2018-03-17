
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(private storage : Storage) {  }

  storeData(key: string,data: any){
    let jsonData = JSON.stringify(data);
      this.storage.set(key,jsonData)
      .then()
      .catch();
  }
  fetchData(key:string){
    return this.storage.get(key); // a promise as well
  }
}
