import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: {};
  id: any;

  constructor(private navCtrl: NavController, private userService: UserService) { 
    this.id={"id": parseInt(localStorage.getItem("providerID"))};
  }
    
  ngOnInit() {
    this.userService.getUserByID(this.id).then(res=>{
      this.user=res;
    }).catch(err=>{
      console.log(err);
    })
  }

}
