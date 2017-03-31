import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { NgModule, Component, OnInit } from '@angular/core';
import { MomentService } from './moment.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 
  ],
  providers: [MomentService],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {
 // title='';

  momentMsg = this.ms.moment("20111031", "YYYYMMDD").toString();

  constructor(private ms: MomentService){
  }
  
  ngOnInit(){ }
}

platformBrowserDynamic().bootstrapModule(AppModule); 