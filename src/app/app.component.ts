import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Okay, proceed .!';
  // names = [];
  myDate : Date;

  constructor(){
    // this.names = ['Tuan','Mark','Kevin'];
    this.myDate = new Date();
  }
  addArticle(title:string, link:string){
    console.log('title is' + title+ 'link is'+link);

  }
}

