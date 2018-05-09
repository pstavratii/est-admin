import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

    constructor(
        private cookieService: CookieService,
        private router: Router
    ) { }

    loginUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
           res => {
              firebase.auth().currentUser.getIdToken()
                  .then(
                      token => this.cookieService.set('utoken', token)
                  )
              }
         )
      .catch(
         error => console.log(error)
      );
    }

}
