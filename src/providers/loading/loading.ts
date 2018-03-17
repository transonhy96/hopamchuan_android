
import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
  loading: Loading;
  constructor(
      private loadingCtrl : LoadingController
  ) {
    
  }
  create(spinner: string, content: string){
   return this.loading = this.loadingCtrl.create({
      spinner: spinner,
      content: content
    });
  }
  show(){
    return this.loading.present();
  }
  close(){
    this.loading.dismiss();
  }
}
