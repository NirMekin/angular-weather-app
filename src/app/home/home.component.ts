import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';
import { WeatherComponent } from '../weather/weather.component';
import { City } from '../services/icity'
import { Output } from '@angular/core/';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  cities : City[];
  // @Output() mode = new EventEmitter();
  @Output() mode : string;

  constructor( private weatherService : WeatherService ) { }

  ngOnInit() {
    // this.mode.emit("grid");
    this.mode = "grid";
    this.weatherService.getCities()
    .subscribe( data => {
      this.cities = data;
    })
  }

  changeMode(mode){
    this.mode = mode;
  }

}
