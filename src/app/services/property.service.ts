import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private property: any;

  constructor(private httpClient: HttpClient) { }

  setProperty(prop){
    console.log({"Prop:": prop});
    this.property=prop;
  }
  getProperty(){
    return this.property

  }

  getPropertyID(propertyID):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      
      console.log("New run")
      this.httpClient.post('http://localhost:5000/api/property/view',propertyID)
      .subscribe((response:any) =>{
        localStorage.setItem('propertyID', response.id);
        console.log({"help":response});
        resolve(response[0]);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
  }

  getAll(): Promise <any> {
    return new Promise <any> ((resolve, reject) =>{
      const headers = new HttpHeaders();
      this.httpClient.get(environment.BaseUrl + "/api/booking/getAllListings", { headers: headers })
      .subscribe(response =>{
        resolve(response);
      },
      (err)=>{
        reject("err " + err);
      });
    })
  }
 createProperty(property):Promise<any>{
    
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      console.log("New run")
      this.httpClient.post('http://localhost:5000/api/property/create',property, {headers})
      .subscribe((response:any) =>{
        
        console.log({"help":response});
        resolve(response[0]);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
  }

  getPropertyProviderID(providerID):Promise<any>{
    console.log(providerID);
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      console.log("New run")
      this.httpClient.post('http://localhost:5000/api/property/start',providerID, {headers})
      .subscribe((response:any) =>{
        
        console.log({"help":response});
        resolve(response[0]);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
  }
  updateProperty(edits):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      console.log("New run")
      this.httpClient.patch('http://localhost:5000/api/property/update',edits, {headers})
      .subscribe((response:any) =>{
        localStorage.setItem('propertyID', response.id);
        console.log({"help":response});
        resolve(response[0]);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
  }
  deleteProperty(propertyId):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      
     
      this.httpClient.delete('http://localhost:5000/api/property/delete',propertyId)
      .subscribe((response:any) =>{
        
        
        resolve(response[0]);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
  }
  
}
