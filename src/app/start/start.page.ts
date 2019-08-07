import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  id: any;
  public properties: any = [];
  public property:{};

  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) { 
    this.id= {'providerId': parseInt(localStorage.getItem('providerID'))};
  }

  ngOnInit() {
    console.log(this.id);
    this.propertyService.getPropertyProviderID(this.id)
    .then(res=>{
      console.log(res, 'ffgfgh');
      this.properties.push(res);
      console.log(this.properties);
    }).catch(err=>{
      console.log(err)
    })
  }

  viewProperty(property){
    localStorage.setItem("propertyID", property.id);
    this.navCtrl.navigateForward('property-details', { 
      queryParams:
      {property: property.id}
  });
  }
  navToCreate(){
    this.navCtrl.navigateForward("create");
  }

  navToView(){
    this.navCtrl.navigateForward("property-details");
  }
  navToProfile(){
    this.navCtrl.navigateForward("profile");
  }
}
