import {Component} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent{
    constructor(public authService:AuthService,private router:Router){

    }
    onLogoutClick(){
        this.authService.logout();
        alert("You are logged out!");
        this.router.navigate(['home']);    //not going home
        return false;
    }
}