import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() name : string;
  @Input() country : string;
  @Input() weather : any;
  @Input() displayStyle : string;

  
  private modalStyle = {
    display: this.display
  }
  constructor() { }

  ngOnInit() {
    console.log( this.displayStyle , this.display  , this.modalStyle.display)
  }

  modalClose(){
    console.log(this.modalStyle.display);
    this.modalStyle.display = "none";
  }

  get display() : string { return this.displayStyle }
}
