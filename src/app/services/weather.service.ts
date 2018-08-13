import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWeather } from './iweather';
import { City } from './icity';
import { Cities } from './cities'
import { HttpClient } from '@angular/common/http/';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private  apiKey : string =  "&appid=fdce6f4274bce1e6d9e37d0255ca9cbe";
  private url : string = "http://api.openweathermap.org/data/2.5/weather?q=";
  private iWeathers : IWeather[];
  constructor( private http : HttpClient ) {}

  getCityInfo(city):Observable<IWeather>{
    return this.http.get<IWeather>(this.url + city.name + this.apiKey);
  }

  getCities():Observable<City[]>{
    return of(Cities);
  }

  
}
