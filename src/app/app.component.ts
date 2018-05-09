import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB3GrimK9hcXCmliStmrDlOq7hrvj2uipo',
            authDomain: 'kpriza-4d47b.firebaseapp.com'
        });
    }
}
