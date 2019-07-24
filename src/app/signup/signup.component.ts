import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            tempDocId: [null, Validators.required],
            loaded: false,
            percent: 0,
            filename: '',
            fileError: false
        });
    }

    registerUser() {

    }
}
