/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, EventEmitter, Input, NgModule, Output  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector : 'textfield',
    template : '<input type="text" [(ngModel)]="field"  (ngModelChange)="handleaction($event)" />'
})
export class TextField {
    @Output() titleCreated = new EventEmitter<{title: string}>();
    field = "";
    constructor() {
    }
    
    handleaction(e) {
        this.field = e;        
        
        this.titleCreated.emit({title:this.field})
        
    }
}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield (titleCreated) = ontitleCreated($event)></textfield>`
})
export class ChildComponent {

    @Output() titleCreated = new EventEmitter<{title: string}>();

    ontitleCreated(eventData: { title: string }) {
        this.titleCreated.emit({title: eventData.title})

    }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component (titleCreated) = ontitleCreated($event) ></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";

    ontitleCreated(eventData: { title: string }) {
        this.title = eventData.title

    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};