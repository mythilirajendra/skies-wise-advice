import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ApixuService } from "./service/apixu.service";
import { ValidateService } from "./service/validate.service";
import {AuthService} from "./service/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
//import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
//import { NgFlashMessagesModule } from 'ng-flash-messages';
//import { NgFlashMessageService } from 'ng-flash-messages';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HistoricWeatherComponent } from './components/historic-weather/historic-weather.component';
import { HeaderComponent } from './components/header/header.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {path:'weather',component:WeatherComponent},
  {path:'historic',component:HistoricWeatherComponent},
  {path:'analysis',component:AnalysisComponent},
  {path:'register',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WeatherComponent,
    LoginComponent,
    SignupComponent,
    HistoricWeatherComponent,
    HeaderComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),  //reactivef,httpclientm
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    //NgFlashMessagesModule.forRoot()                //.forRoot()   
  ],
  providers: [ApixuService,ValidateService,AuthService],//NgFlashMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
