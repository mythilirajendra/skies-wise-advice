import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../service/validate.service';
//import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService} from "../../service/auth.service";
import {Router} from '@angular/router';
//import {sendEmail} from '../../service/email.js'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: String;
  password: String;
  email: String;
  location: String;
  constructor(private validateService: ValidateService, //private flashMessages: NgFlashMessageService,
    private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  onRegisterSubmit(){
    //console.log("in onlogin");
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      location: this.location
    }
    console.log(this.email);
    if(!this.validateService.validateRegister(user)){
      alert("Please fill all fields");
      //this.flashMessages.showFlashMessage({messages:['Please fill all fields'],dismissible:false,timeout:false,type:'danger'});
      //console.log("Please fill all fields");
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      alert("Please fill a valid email address");
      //console.log("Please fill a valid email address");
      return false;
    }
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        alert("You are now registered and mails will be sent,log in if you wish to check or change your details");
        //this.flashMessages.showFlashMessage({messages:["You are now registered, please log in"],dismissible:false,timeout:false,type:'danger'});
        this.router.navigate(['/login']);
        //this.sm.sendmail(user.email);
      } 
      else{
        alert("Failed to register user");
        //this.flashMessages.showFlashMessage({messages:["Failed to register user"],dismissible:false,timeout:false,type:'danger'});
        //console.log("yo");
      }
    })
  }
}