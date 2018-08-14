import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() city : string;
  @Input() mode : string;
  private data : any;
  private styleObj = {};
  private modal : string = "weather";
  private displayStyle : string  = 'block';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    console.log(this.mode)
      this.weatherService.getCityInfo(this.city)
      .subscribe( data => {
        console.log(data)
          this.data = data;
      })
    let h = 200;
    let s = '100%';
    let l = Math.random() * 100  ;
    this.styleObj['background-color'] = `hsl(${h},${s},${l}%)`;
    this.styleObj['color'] = l < 50 ? 'white' : 'black';
    this.styleObj['border-color'] = `hsl(${h},${s},${100-l}%)`; 

  }

  get classList() : string { return this.mode == 'gride' ? 'weather-container-grid' : 'weather-container-wide'}


}
