import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  weatherData = [];
  private initCities : string[] = ['London','Tel%20Aviv','New%20York','Hong%20Kong'];

  constructor( private weatherService : WeatherService ) { }

  ngOnInit() {
    this.initCities.forEach( city => {
      this.weatherService.getCityInfo(city)
      .subscribe( data => {
        console.log(data)
        this.weatherData.push(data)
      })
    })
  }

}
