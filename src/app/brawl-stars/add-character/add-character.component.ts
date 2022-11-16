import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interface/character';
import { BrawlStarsService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  constructor(private brawlStarsService:BrawlStarsService) { 
    console.log('Constructor add character')
  }

  ngOnInit(): void {
  }

  
  @Input() newCharacter: Character = {name: "", health: 0};

  addCharacter() {
    this.brawlStarsService.addCharacter({...this.newCharacter});
    this.newCharacter.name="";
    this.newCharacter.health=0;
  }

  

}
