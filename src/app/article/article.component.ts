import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 date : number
 year : number;
 link : string;

  constructor() {
    this.date = 12022017;
    this.year = 2017;
    this.link = 'http://www.google.com';
  }

  ngOnInit() {
  }

}
