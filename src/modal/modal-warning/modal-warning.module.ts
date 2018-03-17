import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalWarningPage } from './modal-warning';

@NgModule({
  declarations: [
    ModalWarningPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalWarningPage),
  ],
})
export class ModalWarningPageModule {}
