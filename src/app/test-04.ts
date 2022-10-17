/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <div>
                <br/>
                    <input (blur)="handletoggleFocus($event)"  type="text" placeholder="enter first name" [(ngModel)]="firstname"   name="email" /> 
                <br/>
                <br/>
                    <input (blur)="handletoggleFocus($event)" type="text" placeholder="enter last name" [(ngModel)]="lastname"   name="email" />
                <br/>
                </div>
                <div>
                    <div>{{user}}</div>
                </div>
                `,
    styles : []
})
export class UserNameComponent {
    firstname: string;
    lastname: string;
    user;
    random_integer: number

    constructor() {
        
        
    }

    handletoggleFocus(ent) {
        if(this.lastname !== '' && this.lastname !== undefined && this.firstname !== '' && this.firstname !== undefined){
            this.random_integer = Math.floor(Math.random() * 10)

            this.user = `${this.firstname}_${this.lastname}_${this.random_integer}`            
         }
        
       
    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};