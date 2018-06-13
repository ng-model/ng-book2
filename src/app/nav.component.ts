import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  template: `<div class="ui inverted vertical masthead center aligned segment">
  <!--Last updated: <b>{{myDate | amTimeAgo}}</b>,<b>{{myDate | amCalendar}}</b>, <b>{{myDate | amDateFormat:'LL'}}</b>-->
  <div class="ui large secondary inverted pointing menu">
      <div class="ui container">
          <a class="item active" [routerLink]="['/']">
  Home
</a>
          <a class="item" [routerLink]="['/component']">
  Component
</a>
          <a class="item" [routerLink]="['/newComponent']">
  newComponent
</a>
          <a class="item"> {{myDate | amCalendar}}</a>
          <div class="right menu">
              <div class="item">
                  <div class="ui icon input">
                      <input type="text" placeholder="Search...">
                      <i class="search link icon"></i>
                  </div>
              </div>
              <a class="ui item">
    Logout
  </a>
          </div>
      </div>

  </div>
</div>
`,
  styles: [`h1 { font-family: Lato; }`]
})
export class NavComponent  {
  @Input() name = 'World';
  myDate: Date;

  constructor() {
    this.myDate = new Date();
  }
}

