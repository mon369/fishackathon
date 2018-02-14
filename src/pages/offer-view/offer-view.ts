import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfferViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-view',
  templateUrl: 'offer-view.html',
})
export class OfferViewPage {

  offerData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offerData = this.navParams.get("offerData");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferViewPage');
  }

}
