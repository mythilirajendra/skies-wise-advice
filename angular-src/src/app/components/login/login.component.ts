import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onLoginSubmit(){
    //console.log("in onlogin");
    const user = {
      username: this.username,
      password: this.password
    }
    
    this.authService.authenticateUser(user).subscribe(data=>{
      if(data.success){
         //console.log("in datasuccess");
         this.authService.storeUserData(data.token,data.user);
         alert("Successfully logged in!");
         this.router.navigate(['profile']);
      }
      else{
        alert("Invalid details,try again");
      }
    })
  }
}
