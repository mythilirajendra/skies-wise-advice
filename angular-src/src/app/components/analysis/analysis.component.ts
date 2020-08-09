import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../../service/apixu.service";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  public analysisWeatherSearchForm: FormGroup;
  public weatherData: any;
  constructor(private formBuilder: FormBuilder,private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.analysisWeatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    this.apixuService.getAnalysisHistoricWeather(formValues.location).subscribe(data => this.weatherData = data);
    console.log(this.weatherData);
  }
}
