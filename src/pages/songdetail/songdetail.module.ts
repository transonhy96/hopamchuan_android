import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SongDetailPage } from './songdetail';

@NgModule({
  declarations: [
    SongDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SongDetailPage),
  ],
})
export class SongdetailPageModule {}
