import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {TabsPage} from '../pages/tabs/tabs'
import { ListingsPage } from '../pages/listings/listings'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewItemPage } from '../pages/view-item/view-item';
import { PendingOffersPage } from '../pages/pending-offers/pending-offers';
import { RecentTransactionsPage}  from '../pages/recent-transactions/recent-transactions'
import { OfferViewPage } from '../pages/offer-view/offer-view'
import { TransactionViewPage } from '../pages/transaction-view/transaction-view'
import { BlockchainProvider } from '../providers/blockchain/blockchain';

//import { HttpModule, Http } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ListingsPage,
    TabsPage,
    ViewItemPage,
    PendingOffersPage,
    RecentTransactionsPage,
    OfferViewPage,
    TransactionViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListingsPage,
    TabsPage,
    ViewItemPage,
    PendingOffersPage,
    RecentTransactionsPage,
    OfferViewPage,
    TransactionViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BlockchainProvider,
    //DatabaseProvider
  ]
})
export class AppModule {}
