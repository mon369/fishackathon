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
    port : string
  }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.pendingOffers = [
      {
        "id": 0,
        "name": "Yellowfish Tuna",
        "weight": 100,
        "img": "assets/imgs/fishes/yellowfish_tuna.jpg",
        "price": 0.40,
        "location" : "Fiji",
        "port": "Rotuma"
      },
      {
        "id": 1,
        "name": "Large Bigeye",
        "img": "assets/imgs/fishes/large_bigeye.jpg",
        "weight": 120,
        "price": 0.49,
        "location" : "Fiji",
        "port" : "Suva"
      },
      {
        "id": 2,
        "name": "Large Bigeye",
        "img": "assets/imgs/fishes/large_bigeye.jpg",
        "weight":80,
        "price": 0.25,
        "location" : "Fiji",
        "port" : "Levuka"
      },
      {
        "id": 3,
        "name": "Yellowfish Tuna",
        "weight": 150,
        "img": "assets/imgs/fishes/yellowfish_tuna.jpg",
        "price": 1.29,
        "location" : "Fiji",
        "port" : "Rotuna"
      }, 
      {
        "id": 4,
        "name": "Swordfish",
        "img": "assets/imgs/fishes/swordfish.jpg",
        "weight": 140,
        "price": 0.30,
        "location" : "Fiji",
        "port" : "Suva"
      }, 
      {
        "id": 5,
        "name": "Blue Marlin",
        "img": "assets/imgs/fishes/blue_marlin.jpg",
        "weight": 140,
        "price": 0.65,
        "location" : "Fiji",
        "port" : "Suva"
      },
      {
        "id": 6,
        "name": "Spotted Sunfish",
        "img": "assets/imgs/fishes/spotted_sunfish.jpg",
        "weight": 130,
        "price": 0.25,
        "location" : "Fiji",
        "port" : "Levuka"
      }
    ]
  }
  viewOffer(offerData: any) {
    this.navCtrl.push(OfferViewPage, { offerData: offerData })
  }
}


