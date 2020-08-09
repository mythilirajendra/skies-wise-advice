import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../../service/apixu.service";

@Component({
  selector: 'app-historic-weather',
  templateUrl: './historic-weather.component.html',
  styleUrls: ['./historic-weather.component.css']
})
export class HistoricWeatherComponent implements OnInit {
  public historicWeatherSearchForm: FormGroup;
  public weatherData: any;
  constructor(private formBuilder: FormBuilder,private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.historicWeatherSearchForm = this.formBuilder.group({
      location: [''],
      date: ['']
    });
  }
  sendToAPIXU(formValues) {
    this.apixuService.getHistoricWeather(formValues.location,formValues.date).subscribe(data => this.weatherData = data);
    console.log(this.weatherData);
  }

}
