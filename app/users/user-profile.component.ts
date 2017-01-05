import { User } from './../shared/models/user';
import { Component,Input     } from '@angular/core';

@Component({
    selector:'user-profile',
    templateUrl:'./app/users/user-profile.component.html',
    styleUrls:['./app/users/user-profile.component.css']
})
export class UserProfileComponent{
    @Input() user:User;
}