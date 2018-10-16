import { Component } from '@angular/core';

import { ProfilPage } from '../profil/profil';
import { ContactPage } from '../contact/contact';
import { MapPage } from '../map/map';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilPage;
  tab2Root = MapPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;

  constructor() {

  }
}
