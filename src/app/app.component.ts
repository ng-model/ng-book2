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
  addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean{
    console.log('title: ${title.value} and link: ${link.value}');
    return false;
  }
}

