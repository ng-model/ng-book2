import {Routes, RouterModule, CanActivate} from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './new.component';
import { ArticleComponent } from './article/article.component';
import { Component1Component } from './component1/component1.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'article', component: ArticleComponent },
 { path: 'component', component: Component1Component },
 { path: 'newComponent', component: NewComponent }
 
];

export const routing = RouterModule.forRoot(routes);