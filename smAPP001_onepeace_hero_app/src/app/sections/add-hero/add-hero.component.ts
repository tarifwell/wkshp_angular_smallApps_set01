import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceHerosService } from '../../services/service-heros.service';

@Component({
  selector: 'app-add-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
})
export class AddHeroComponent {
  hero = {
    name: '',
    power: 0,
    imgUrl: '',
  };

  constructor(public _serviceHeros: ServiceHerosService) {
    this.hero = this._serviceHeros.hero;
  }

  addHero() {
    this._serviceHeros.heroes.push(this._serviceHeros.hero);
    this._serviceHeros.hero = {
      name: '',
      power: 0,
      imgUrl: '',
    };
  }
}
