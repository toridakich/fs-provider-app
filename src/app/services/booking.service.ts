import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookings: Array<any>;

  constructor(private httpClient: HttpClient) { }

  public createBooking(Booking: any){
    return new Promise((resolve, reject) =>{
      const headers = new HttpHeaders();
      this.httpClient.post(environment.BaseUrl + '/api/bookings/createNewBooking', Booking, { headers }).subscribe((response: any)=>{
        
        localStorage.setItem('id', response.id);
        resolve(response);
        
      },
      (err: any) => {
        console.log(err);
        reject(err);
      });
    });
  }

  public getBookings(id: any):Promise<any>{
    return new Promise <any>((resolve, reject) =>{
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");
      this.httpClient.get(environment.BaseUrl + "/api/bookings/listAllBookings", { headers: headers })
      .subscribe(response =>{
        resolve(response);
      },
      (err)=>{
        reject("err " + err);
      });
    });
  }
  public updateToAccepted(Booking: any){
    return new Promise((resolve, reject) =>{
      const headers = new HttpHeaders();
      this.httpClient.patch(environment.BaseUrl + '/api/bookings/updateBookingStatusToAccepted', Booking, { headers }).subscribe((response: any)=>{
        
        resolve(response);
      },
      (err: any) => {
        console.log(err);
        reject(err);
      });
    });
  }
  public updateToRejected(Booking: any){
    return new Promise((resolve, reject) =>{
      const headers = new HttpHeaders();
      this.httpClient.patch(environment.BaseUrl + '/api/bookings/updateBookingStatusToRejected', Booking, { headers }).subscribe((response: any)=>{
        
        resolve(response);
      },
      (err: any) => {
        console.log(err);
        reject(err);
      });
    });
  }
}
