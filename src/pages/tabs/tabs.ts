import { Component } from '@angular/core';
import { ListingsPage } from '../listings/listings'
import { PendingOffersPage } from '../pending-offers/pending-offers'
import {RecentTransactionsPage} from '../recent-transactions/recent-transactions'
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = ListingsPage;
  tab2Root = PendingOffersPage;
  tab3Root = RecentTransactionsPage;

  constructor() {
  }
}
