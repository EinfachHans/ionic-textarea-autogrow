import {Component} from '@angular/core';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController,
              private routerOutlet: IonRouterOutlet) {
  }

  openModal() {
    this.modalCtrl.create({
      component: ModalComponent,
      presentingElement: this.routerOutlet.nativeEl,
      swipeToClose: true
    }).then(modal => modal.present());
  }
}
