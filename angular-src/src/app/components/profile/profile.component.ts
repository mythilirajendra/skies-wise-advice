import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;     //Object

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile=>{
      this.user = profile;
    },
    err => {
      console.log(err);
      return false;
    }
    )
  }

}
