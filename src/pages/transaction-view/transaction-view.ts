import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransactionViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-view',
  templateUrl: 'transaction-view.html',
})
export class TransactionViewPage {

  tx: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tx = this.navParams.get("tx")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionViewPage');
  }

}
