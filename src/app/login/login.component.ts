import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from '../shared/guard';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        public router: Router,
        private loginService: LoginService,
        private cookieService: CookieService,
        private authGuard: AuthGuard
    ) {}

    ngOnInit() {
        if (this.authGuard.canActivate()) {
            this.router.navigate(['/dashboard']);
        }
    }

    onLogin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.loginService.loginUser(email, password);
        if (this.authGuard.canActivate()) {
            this.router.navigate(['/dashboard']);
        } else {

        }
        localStorage.setItem('isLoggedin', 'true');
    }
}
