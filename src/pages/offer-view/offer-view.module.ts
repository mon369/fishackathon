import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferViewPage } from './offer-view';

@NgModule({
  declarations: [
    OfferViewPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferViewPage),
  ],
})
export class OfferViewPageModule {}
