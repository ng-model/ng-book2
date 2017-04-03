import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template:'<h3>New Hero</h3><form> <div></div></form>',
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
    console.log('title'+title + 'link'+link);

  }
}

