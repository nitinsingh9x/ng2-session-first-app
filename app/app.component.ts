import { User } from './shared/models/user';
import { Component} from '@angular/core';

@Component({
    selector:'my-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css']
})
export class AppComponent{
    message = 'hello';
    users:User[] = [
        {id:25,name:'chetan',username:'chetans311'},
        {id:26,name:'vishnu',username:'vishnus311'},
        {id:27,name:'nitin',username:'nitins311'}
    ];

    activeUser;

    selectUser(user:any){
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event){
        this.users.push(event.user);
        console.log(event);
    }
}