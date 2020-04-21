import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootsnip1',
  templateUrl: './bootsnip1.component.html',
  styleUrls: ['./bootsnip1.component.css']
})
export class Bootsnip1Component implements OnInit {


  @Input() card; //initially it is empty object

  constructor() { }

  ngOnInit(): void {
  }

}
