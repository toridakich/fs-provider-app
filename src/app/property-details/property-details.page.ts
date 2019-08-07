import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {PropertyService} from '../services/property.service';
import {Property} from '../models/property';

import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';
// import { runInThisContext } from 'vm';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage  {
  id: any;
  property: Property= new Property();
  start: string;
  end: string;
  booking: Booking = new Booking();
  user: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,private listingService: PropertyService, private bookingService: BookingService) {
    // this.listingService.getPropertyID(this.id).then(res=>{
    //   console.log("test: ")
    //   console.log(res);
    //   this.property=res;
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    this.id= {'id':localStorage.getItem('id')};

  }

  ionViewWillEnter() {
    this.listingService.getPropertyID(this.id).then(res=>{
      console.log("test: ")
      console.log(res);
      this.property=res;

      }).catch(err=>{
        console.log(err);
      })


  }

  back(){
    this.navCtrl.navigateForward('start');
  }
  delete(){
    this.listingService.deleteProperty(this.id).then(res=>{
      
      this.navCtrl.navigateForward('start');
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
navToUpdate(){
  this.navCtrl.navigateForward("update");
}
viewBookings(){
  
  this.navCtrl.navigateForward('booking-requests');
  
}}