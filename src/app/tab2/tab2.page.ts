import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { PhotoService } from '../services/photo.service';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonIcon,
    IonFab,
    IonFabButton,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  ],
})
export class Tab2Page {
  constructor(public photoService: PhotoService) {
    addIcons({ camera });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
