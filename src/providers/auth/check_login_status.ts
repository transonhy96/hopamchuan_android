import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";


@Injectable()

export class CheckLoginStatus{
    private subject : Subject<any> = new  Subject<any>();

    updateStatus(status : boolean){
        this.subject.next({isLogin:status});
    }


    getStatus(){
      return  this.subject.asObservable();
    }
    clearStatus(){
        this.subject.next();
    }

}