import { Component } from "@angular/core";

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent {
    title : string = 'Lista de la compra';
    compra = [
        {element: 'Cerveza', quantity: 100},
        {element: 'Huevos', quantity: 24},
        {element: 'Batido chocolate', quantity: 1},
        {element: 'Salmón', quantity: 2},
        {element: 'Plátanos', quantity: 10}
    ]
}
