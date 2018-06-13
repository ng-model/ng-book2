import { Routes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule }  from '@angular/router';
import {MomentModule} from "angular2-moment";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavComponent } from './nav.component';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ArticleComponent } from './article/article.component';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    NewComponent,
    ArticleComponent,
    Component1Component
  ],
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
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

export const routing = RouterModule.forRoot(Routes); 

platformBrowserDynamic().bootstrapModule(AppModule);
