import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  host: {
    class: 'row'
  },
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  votes : number
  title : string;
  link : string;

  constructor() {
  this.title = 'Manoj';
  this.link = 'http://manoj.io';
  this.votes = 5;
   }
  
  voteUp(): boolean{
    this.votes +=1;
    return false;
  }

  voteDown(): boolean{
    this.votes -=1;
    return false;
  }
  ngOnInit() {
  }

}
