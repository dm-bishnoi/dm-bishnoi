import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.scss'],
 
})
export class ParentCompComponent implements OnInit {
  
  ngOnInit(): void {
  }

  saveDataSuccuse(event: any){
    alert('hello parent')
   }

   addError(item: any){ }

}
