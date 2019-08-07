import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../services/property.service';
import {Property} from '../models/property';
import {NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit  {
  id: any;
  property: Property= new Property();
  /* title: string;
  description: string;
  location: string;
  pricePerNight: string;
  imgURL: string
  newProp: any; */
  constructor(public alertCtrl: AlertController, private listingService: PropertyService, private navCtrl: NavController) {
    this.id= {'id':localStorage.getItem('id')};


   }

  ngOnInit() {
    this.listingService.getPropertyID(this.id).then(res=>{
      console.log("test: ")
      console.log(res);
      this.property=res;

      }).catch(err=>{
        console.log(err);
      })


}

  save(){
    /* this.newProp = {
      title: this.title,
      description: this.description,
      location: this.location,
      pricePerNight: this.pricePerNight,
      imgURL: this.imgURL,
      id: this.property.id
    } */
    console.log(this.property,"new Prop")
   
    this.listingService.updateProperty(this.property).then(res=>{
      this.presentAlert("Edit successful! Please return to listings.");
      this.property=res;

      }).catch(err=>{
        console.log(err);
      })

  }
  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();


}
  back(){
    this.navCtrl.navigateBack('start');
  }
}
