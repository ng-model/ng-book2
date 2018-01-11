import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ArticleComponent } from './article/article.component';
import { Component1Component } from './component1/component1.component';


export const Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
//  { path: 'home', component: AppComponent },
  { path: 'article', component: ArticleComponent },
 { path: 'component', component: Component1Component },
 { path: 'newComponent', component: NewComponent }
 
];
