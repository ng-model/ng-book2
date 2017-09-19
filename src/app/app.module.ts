import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {MomentModule} from "angular2-moment";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewComponent } from './new.component';
import { ArticleComponent } from './article/article.component';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ArticleComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    MomentModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {

  ngOnInit(){ }
}

platformBrowserDynamic().bootstrapModule(AppModule);
