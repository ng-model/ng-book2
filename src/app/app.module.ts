import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { NgModule } from '@angular/core';
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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean{ 
    console.log('${title.value}', '${link.value}'); 
    return false; 
  } 
 } 
 
platformBrowserDynamic().bootstrapModule(AppModule); 