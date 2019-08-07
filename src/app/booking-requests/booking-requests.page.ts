import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking'
@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.page.html',
  styleUrls: ['./booking-requests.page.scss'],
})
export class BookingRequestsPage {
  propertyId: any;
  
  public bookings: any = [];
  public booking: {};

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private bookService: BookingService,
    
  ) { 
    this.propertyId = {"propertyId": parseInt(localStorage.getItem("id"))};
    
  }

  ionViewWillEnter() {
    this.bookService.getBookings(this.propertyId).then(res=>{
      console.log(res);
      this.bookings = res;
    }).catch(err=>{
      console.log(err);
    })
  }

}
