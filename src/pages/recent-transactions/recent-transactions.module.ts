import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentTransactionsPage } from './recent-transactions';

@NgModule({
  declarations: [
    RecentTransactionsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentTransactionsPage),
  ],
})
export class RecentTransactionsPageModule {}
