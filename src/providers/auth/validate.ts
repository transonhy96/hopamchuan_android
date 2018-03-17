import { Injectable } from '@angular/core';

@Injectable()
export class Validator{
    
    pattern = /^\w+@\w+.[a-zA-Z]+.[com]/;
    constructor(){}
    emailValidator(email: string){
       
        return  email.match(this.pattern) ?  true :  false ;
    }
}