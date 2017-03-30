import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Okay, proceed .!';
  names = [];

  constructor(){
    this.names = ['Tuan','Mark','Kevin'];
  }
}
