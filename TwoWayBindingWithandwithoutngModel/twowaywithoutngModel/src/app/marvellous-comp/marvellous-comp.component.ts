import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  templateUrl: './marvellous-comp.component.html',
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent implements OnInit {
    sname:string;

  constructor() { }

  ngOnInit() {
  }



  fun(event:any)
  {
    this.sname = event.target.value;
  }

}
