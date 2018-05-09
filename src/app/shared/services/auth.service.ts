import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {
    token: string;

    constructor(
        private cookieService: CookieService
    ) { }


    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                token => this.token = this.cookieService.get('utoken')
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
