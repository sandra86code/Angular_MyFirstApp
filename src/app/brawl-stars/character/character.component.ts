import { Component, Input } from '@angular/core';
import { Character } from '../interface/character';
import { BrawlStarsService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  
  constructor(private brawlStarsService: BrawlStarsService) { 
   
  }

  get characters(): Character[] {
    return this.brawlStarsService.characters;
  }


  deleteCharacter(character: Character) {
    this.brawlStarsService.deleteCharacter(character);
  }
}
