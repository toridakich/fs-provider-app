import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import{ PropertyService } from '../services/property.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public title: string;
  public description: string;
  public location: string;
  public pricePerNight: number;
  public imgURL: string;
  

  constructor(
    private navCtrl: NavController,
    private propService: PropertyService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }
  submit(){
    const newProp = {
      title: this.title,
      userId: parseInt(localStorage.getItem('userId')),
      description: this.description,
      location: this.location,
      pricePerNight: this.pricePerNight,
      providerId: parseInt(localStorage.getItem('providerID')),
      imgURL: this.imgURL,
      
    }
    this.propService.createProperty(newProp).then(res =>{
      
      console.log(res);
      this.navCtrl.navigateForward('start');
    }).catch(err =>{
      this.presentAlert(err);
    });
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to register',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
  navToStart(){
    this.navCtrl.navigateForward("start");
  }
}
