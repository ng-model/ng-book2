import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  
  title = 'Okay, proceed .!';
  myDate : Date;

  constructor(){
    // this.names = ['Tuan','Mark','Kevin'];
    this.myDate = new Date();
  }
  addArticle(title:string, link:string){
    console.log('title is' + title+ 'link is'+link);

  }
  ngOnInit() {
  }

}
