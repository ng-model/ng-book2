import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MomentModule } from 'angular2-moment';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//import * as moment from '../node_modules/angular2-moment/';
//import '../node_modules/angular2-moment/add.pipe.d.ts';
//const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;

platformBrowserDynamic().bootstrapModule(AppModule);
