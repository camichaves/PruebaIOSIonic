import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista;
  usuarios: any[] = [];
  constructor(private dataService: DataService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((users: any[]) => {
      this.usuarios = users;
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user: any) {
    this.presentToast('Favorito agregado');
    this.lista.closeSlidingItems();
  }

  share(user: any) {
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  borrar(user: any) {
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }
}
