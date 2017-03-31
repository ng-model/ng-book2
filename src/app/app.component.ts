import { NgModule,Component } from '@angular/core';
// import { MomentModule } from 'angular2-moment';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare var moment: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template:'<h3>New Hero</h3><form> <div></div></form>',
  styleUrls: ['./app.component.css']
})

// @Component({
//   selector:'new-selector',
//   template:'<h3>New Hero</h3><form> <div></div></form>'
// })
export class AppComponent {
  title = 'Okay, proceed .!';
  names = [];
 // myDate = Date;

  constructor(){
    this.names = ['Tuan','Mark','Kevin'];
  //  this.myDate = new Date();
  }
}
// export class AppComponent1 {
//  // title = 'Okay, proceed .!';
//  // names = [];

//   constructor(){
//  //   this.names = ['Tuan','Mark','Kevin'];
//   }
// }
