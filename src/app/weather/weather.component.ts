import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() data : any;
  private backgroundColor : string;
  private fontColor : string;
  private openModalFlag : string = 'none';
  private styleObj = {}
  constructor() { }

  ngOnInit() {
    let h = Math.random() * 500 ;
    let s = '100%';
    let l = Math.random() * 100  ;
    this.styleObj['background-color'] = `hsl(${h},${s},${l}%)`;
    this.styleObj['color'] = l < 50 ? 'white' : 'black';
    this.styleObj['border'] = `1px hsl(${h},${s},${100-l}%) solid`;
    

  }

  openModal(){
    console.log("test")
    this.openModalFlag =  this.openModalFlag =='block' ? 'none' : 'block';
  }
}
