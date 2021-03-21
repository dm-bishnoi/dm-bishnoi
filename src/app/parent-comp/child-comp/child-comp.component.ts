import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {
  @Output() apiErrorEvent = new EventEmitter<string>();
  @Output() saveDataSuccuse = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.saveDataSuccuse;
  }

}
