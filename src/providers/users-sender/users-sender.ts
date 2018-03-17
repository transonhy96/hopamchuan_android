import { Users } from './../../models/users.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';


@Injectable()
export class UsersSenderProvider {
  private subject :Subject<any> = new Subject<any>();
 
  dataFromSender(Users: Users){
      this.subject.next({Users:Users});
  }
  getData(){
    return this.subject.asObservable();
  }
  clearData(){
    this.subject.next();
  }
}
