import { Injectable } from "@angular/core";
import { Character } from "../interface/character";

@Injectable()
export class BrawlStarsService {
    private _characters = [ 
        {name: "Shelby", health: 3600},
        {name: "Nita", health: 3800},
        {name: "Colg", health: 2800},
        {name: "Joe", health: 2002},
        {name: "Miriam", health: 2001},
        {name: "Sarah", health: 2000},
        {name: "Nick", health: 800}
      ]

    constructor() {
        console.log('Servicio iniciado')
        
    }

    get characters():Character[] {
        return [...this._characters];
    }
   
    addCharacter(character: Character) {
        this._characters.push(character);
    }

    deleteCharacter(character: Character) {
        const index = this._characters.indexOf(character);
        this._characters.splice(index, 1); 
    }
}