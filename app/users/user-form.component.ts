import { User } from './../shared/models/user';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'user-form',
    templateUrl: './app/users/user-form.component.html',
    styles: [`
        form{
            padding:10px;
            background: #ECF0F1;
            border-radius:3px;
            margin-bottom:30px;
        }
    `]
})
export class UserFormComponent {
    newUser: Object = new Object();
    active: boolean = true;
    @Output() userCreated = new EventEmitter();

    onSubmit() {
        console.log(this.newUser);
        this.userCreated.emit({user:this.newUser});
        this.newUser = new Object();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}