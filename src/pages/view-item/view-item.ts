import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-item',
  templateUrl: 'view-item.html',
})
export class ViewItemPage {

  img_src = "https://farm3.staticflickr.com/2884/11949607823_a342f27f9a_h.jpg"
  fishData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fishData = this.navParams.get("fishData")
  }


  ionViewDidLoad() {
  }

}
