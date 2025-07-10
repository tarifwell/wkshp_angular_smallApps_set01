import { Component } from '@angular/core';
import { AddHeroComponent } from '../sections/add-hero/add-hero.component';
import { PickHeroComponent } from '../sections/pick-hero/pick-hero.component';
import { ShowHerosComponent } from '../sections/show-heros/show-heros.component';

@Component({
  selector: 'app-home',
  imports: [AddHeroComponent, PickHeroComponent, ShowHerosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
