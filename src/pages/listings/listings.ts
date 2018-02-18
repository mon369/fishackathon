import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewItemPage } from '../view-item/view-item'
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the ListingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listings',
  templateUrl: 'listings.html',
})
export class ListingsPage {


  fishData: {
    id: number,
    name: string,
    img: string,
    weight: number,
    price: number,
    location : string,
    port : string,
    sold: boolean
  }[];
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.fishData = [
      {
        "id": 0,
        "name": "Yellowfin Tuna",
        "weight": 100,
        "img": "assets/imgs/fishes/yellowfish_tuna.jpg",
        "price": 0.40,
        "location" : "Fiji",
        "port": "Lekuva",
        "sold": false
      }, {
        "id": 1,
        "name": "Large Bigeye",
        "img": "assets/imgs/fishes/large_bigeye.jpg",
        "weight": 120,
        "price": 0.60,
        "location" : "Fiji",
        "port" : "Rotuma",
        "sold": false
      },
      {
        "id": 2,
        "name": "Swordfish",
        "img": "assets/imgs/fishes/swordfish.jpg",
        "weight": 90,
        "price": 0.25,
        "location" : "Fiji",
        "port" : "Suva",
        "sold": false
      }, {
        "id": 3,
        "name": "Blue Marlin",
        "img": "assets/imgs/fishes/blue_marlin.jpg",
        "weight": 110,
        "price": 0.60,
        "location" : "Fiji",
        "port" : "Suva",
        "sold": false
      },
      {
        "id": 4,
        "name": "Spotted Sunfish",
        "img": "assets/imgs/fishes/spotted_sunfish.jpg",
        "weight": 150,
        "price": 0.80,
        "location" : "Fiji",
        "port" : "Levuka",
        "sold": false
      }
    ]
    console.log(this.fishData)
  }

  viewListing(fish: any) {
    console.log("Clicked" + JSON.stringify(fish))
    this.navCtrl.push(ViewItemPage, { fishData: fish });
  }

  sell(id : number){
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: this.fishData[id].weight + 'lbs of ' +this.fishData[id].name + ' for ' + '\n$' + this.fishData[id].price * this.fishData[id].weight + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            let alert2 = this.alertCtrl.create({
              title: 'Success!',
              message: 'A confirmation has been sent to you and the seller.',
              buttons: [ 
                {
                  text: 'Ok',
                  handler: () => {
                    this.fishData[id].sold = true;
                  }
                }
              ]
            });
            alert2.present();
            this.fishData[id].sold = true;

          }
        }
      ]
    });
    alert.present();
  }
}
