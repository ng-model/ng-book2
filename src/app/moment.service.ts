import { Injectable } from '@angular/core';

// import m from 'moment';
// Following is the correct syntex, but does not work in plunker
import * as m from 'moment';

@Injectable()
export class MomentService {
  moment = m;
}
