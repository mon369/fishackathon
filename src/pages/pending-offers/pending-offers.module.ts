import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingOffersPage } from './pending-offers';

@NgModule({
  declarations: [
    PendingOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingOffersPage),
  ],
})
export class PendingOffersPageModule {}
