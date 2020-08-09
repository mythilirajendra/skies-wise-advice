import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get('http://api.weatherstack.com/current?access_key=77ad565b888c10df56b61b2861aa1add&query=' + location);
  }
  /*getWeather(location){
    return this.http.get('https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=bYCh7o8kKrPvcmnCT8lR5RdRubZnrM_0sVaijatPcJc&product=observation&name=' + location);
  }*/ 
  getHistoricWeather(location,date){
    //return this.http.get('https://api.worldweatheronline.com/premium/v1/past-weather.ashx&key=2a6ec1b76b7546c49ce163238202507&q='+location+'&date='+date);
    return this.http.get('http://api.worldweatheronline.com/premium/v1/past-weather.ashx?q='+location+'&date='+date+'&format=json&key=2a6ec1b76b7546c49ce163238202507');
  }
  getAnalysisHistoricWeather(location){
    return this.http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/historysummary?aggregateHours=24&combinationMethod=aggregate&collectStationContributions=false&maxStations=-1&maxDistance=-1&minYear=1989&maxYear=2019&chronoUnit=months&breakBy=self&dailySummaries=false&contentType=json&unitGroup=us&locationMode=single&key=E1XMRADEILDB2237GHR2YJ1HA&locations='+location);
  }
}
