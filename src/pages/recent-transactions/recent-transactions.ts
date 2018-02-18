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
  currentOwner: string;
  certified: boolean;
  
  recentTx: {
    hashcode: string,
    name: string,
    img: string,
    weight: number,
    price: number,
    location: string,
    port: string
    sold: boolean,
    date: string,
    show: boolean,
    event: string,
    actor: {
      name: string,
      type: string
    },
    icon: string
  }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.certified = false;
    this.recentTx = [
      {
        "hashcode": "e3b0c44298fc1c149af",
        "name": "Spotted Sunfish",
        "img": "assets/imgs/fishes/spotted_sunfish.jpg",
        "weight": 150,
        "price": 0.80,
        "location": "Fiji",
        "port": "Levuka",
        "sold": true,
        "date": "February 17, 2018",
        "show" : false,
        "event" : "Catch Registered By",
        "actor" :{
          "name" : "Laisa Keni",
          "type" : "Fisher"
        },
        "icon" : "pin"
      },
      {
        "hashcode": "996fb92427ae41e464",
        "name": "Spotted Sunfish",
        "img": "assets/imgs/fishes/spotted_sunfish.jpg",
        "weight": 150,
        "price": 0.80,
        "location": "Fiji",
        "port": "Levuka",
        "sold": true,
        "date": "February 17, 2018",
        "show" : false,
        "event" : "Transferred To",
        "actor" :{
          "name" : "Ratu Meli",
          "type" : "Middleman"
        },
        "icon" : "swap"
      }, {
        "hashcode": "a495991b7852b855",
        "name": "Large Bigeye",
        "img": "assets/imgs/fishes/large_bigeye.jpg",
        "weight": 120,
        "price": 0.60,
        "location": "Fiji",
        "port": "Rotuma",
        "sold": true,
        "date": "February 17, 2018",
        "show" : false,
        "event" : "Transferred To",
        "actor" :{
          "name" : "Timoci Pio",
          "type" : "Exporter"
        },
        "icon" : "swap"
      },
      {
        "hashcode": "fb92427ae41e4",
        "name": "Yellowfin Tuna",
        "weight": 100,
        "img": "assets/imgs/fishes/yellowfish_tuna.jpg",
        "price": 0.40,
        "location": "China",
        "port": "Shenzhen",
        "sold": true,
        "date": "February 22, 2018",
        "show" : false,
        "event" : "End Destination",
        "actor" :{
          "name" : "Sheng Supermarket",
          "type" : "Retailer"
        },
        "icon" : "pin"
      }]

      this.currentOwner = this.recentTx[0].actor.name;
  }

  ionViewDidLoad() {
    
  }

  ionViewDidEnter() {
       var intervalObj = setInterval(()=>{
        
        if( this.intervalIndex < this.recentTx.length){
            this.recentTx[this.intervalIndex].show = true;
            this.currentOwner = this.recentTx[this.intervalIndex].actor.name
            console.log(this.intervalIndex);
            this.intervalIndex++;
        }else{
          this.certified = true;
          clearInterval(intervalObj);
          console.log("Done!")
        }  
       }, 7000);
  }

  

  viewTx(txData: any) {
    this.navCtrl.push(TransactionViewPage, { tx: txData })
  }



}
