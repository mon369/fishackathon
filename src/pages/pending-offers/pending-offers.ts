import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferViewPage } from '../offer-view/offer-view';

/**
 * Generated class for the PendingOffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-offers',
  templateUrl: 'pending-offers.html',
})
export class PendingOffersPage {


  pendingOffers: {
    id: number,
    name: string,
    img: string,
    weight: number,
    price: number,
    location: string,
    port: string,
    dateOffered: string
  }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.pendingOffers = [
      {
        "id": 0,
        "name": "Yellowfin Tuna",
        "weight": 100,
        "img": "assets/imgs/fishes/yellowfish_tuna.jpg",
        "price": 0.40,
        "location": "Fiji",
        "port": "Rotuma",
        "dateOffered": "February 17, 2018"
      }
      ,
      {
        "id": 6,
        "name": "Spotted Sunfish",
        "img": "assets/imgs/fishes/spotted_sunfish.jpg",
        "weight": 130,
        "price": 0.25,
        "location": "Fiji",
        "port": "Levuka",
        "dateOffered": "February 17, 2018"
       }
    ]
  }
  viewOffer(offerData: any) {
    this.navCtrl.push(OfferViewPage, { offerData: offerData })
  }
}


