import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/Usuario';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaUsuarios: Usuario[] = [];

  constructor(public storageService: StorageService,
    public alertController: AlertController) {}

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

  async removerUsuario(key: string){
    await this.storageService.remove(key);
    this.buscarUsuarios();
  }
}
