import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionViewPage } from './transaction-view';

@NgModule({
  declarations: [
    TransactionViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionViewPage),
  ],
})
export class TransactionViewPageModule {}
