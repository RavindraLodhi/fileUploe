import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-second-input-output',
  templateUrl: './second-input-output.component.html',
  styleUrls: ['./second-input-output.component.css']
})
export class SecondInputOutputComponent implements OnInit {
  @Input() name;
  @Output() chnge ;
  constructor() { }

  ngOnInit() {
  }

}
