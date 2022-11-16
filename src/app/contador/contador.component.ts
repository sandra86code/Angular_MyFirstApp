import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
    
})
export class ContadorComponent {
    title: string = 'Mi contador';
    counter : number = 10;
    base : number = 7;

    aggregate(value: number) {
        this.counter += value;
    }
}