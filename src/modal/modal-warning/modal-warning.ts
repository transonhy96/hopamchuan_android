import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalWarningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-warning',
  templateUrl: 'modal-warning.html',
})
export class ModalWarningPage {
  chord_src: string;
  chord: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chord= this.navParams.get('chord');
    switch (this.chord){
      
            case 'Fmj7':
                  this.chord_src='../../../resources/img/Fmj7.png';
                break;
            case 'Am':
                this.chord_src='../../../resources/img/Am.png';
                break;
            case 'Em':
              this.chord_src='../../../resources/img/Em.png';
                break;
            case 'F':
              this.chord_src='../../../resources/img/F.png';
                break;
            case 'C':
              this.chord_src='../../../resources/img/C.png';
                break;
            case 'G':
              this.chord_src='../../../resources/img/G.png';
               break;
            case 'Dmj7':
              this.chord_src='../../../resources/img/Dmj7.png';
               break;
          }
          
  }

  
}
