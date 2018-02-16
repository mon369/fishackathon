import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionViewPage } from '../transaction-view/transaction-view';

/**
 * Generated class for the RecentTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recent-transactions',
  templateUrl: 'recent-transactions.html',
})
export class RecentTransactionsPage {

  intervalIndex: number = 0;
  
  recentTx: {
    id: number,
    name: string,
    img: string,
    weight: number,
    price: number,
    location: string,
    port: string
    sold: boolean,
    date: string,
    show: boolean
  }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.recentTx = [
      {
        "id": 0,
        "name": "Spotted Sunfish",
        "img": "assets/imgs/fishes/spotted_sunfish.jpg",
        "weight": 150,
        "price": 0.80,
        "location": "Fiji",
        "port": "Levuka",
        "sold": true,
        "date": "February 11, 2018",
        "show" : false
      },
      {
        "id": 1,
        "name": "Spotted Sunfish",
        "img": "assets/imgs/fishes/spotted_sunfish.jpg",
        "weight": 150,
        "price": 0.80,
        "location": "Fiji",
        "port": "Levuka",
        "sold": true,
        "date": "February 11, 2018",
        "show" : false
      }, {
        "id": 3,
        "name": "Large Bigeye",
        "img": "assets/imgs/fishes/large_bigeye.jpg",
        "weight": 120,
        "price": 0.60,
        "location": "Fiji",
        "port": "Rotuma",
        "sold": true,
        "date": "February 10, 2018",
        "show" : false
      },
      {
        "id": 2,
        "name": "Yellowfish Tuna",
        "weight": 100,
        "img": "assets/imgs/fishes/yellowfish_tuna.jpg",
        "price": 0.40,
        "location": "Fiji",
        "port": "Rotuma",
        "sold": true,
        "date": "February 10, 2018",
        "show" : false
      },
      {
        "id": 4,
        "name": "Swordfish",
        "img": "assets/imgs/fishes/swordfish.jpg",
        "weight": 90,
        "price": 0.25,
        "location": "Fiji",
        "port": "Suva",
        "sold": true,
        "date": "February 09, 2018",
        "show" : false
      }]
  }

  ionViewDidEnter() {
       var intervalObj = setInterval(()=>{
        
        if( this.intervalIndex < this.recentTx.length){
            this.recentTx[this.intervalIndex].show = true;
            console.log(this.intervalIndex);
            this.intervalIndex++;
            
        }else{
          clearInterval(intervalObj);
          console.log("Done!")
        }  
       }, 100);
  }

  

  viewTx(txData: any) {
    this.navCtrl.push(TransactionViewPage, { tx: txData })
  }



}
