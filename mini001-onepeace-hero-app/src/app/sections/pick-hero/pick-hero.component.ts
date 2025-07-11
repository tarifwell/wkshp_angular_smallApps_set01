import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceHerosService } from '../../services/service-heros.service';

@Component({
  selector: 'app-pick-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './pick-hero.component.html',
  styleUrl: './pick-hero.component.css',
})
export class PickHeroComponent {
  //heroes: any[] = [];

  constructor(
    private elementRef: ElementRef,
    public _serviceHeros: ServiceHerosService
  ) {}

  // ngOnInit() {
  //   this.heroes = this._serviceHeros.someInitialHeroes;
  // }

  selectHero(hero: any) {
    console.log('hero', hero);
    this._serviceHeros.hero = hero;
  }

  // Card Animation [!!! to review]
  swipeDirection: string = 'left';
  swipe(event: TouchEvent) {
    const swipeDirection = event.type === 'touchend' ? 'right' : 'left';
    this.swipeDirection = swipeDirection;
    const card = this.elementRef.nativeElement.querySelector('.card');
    card.classList.add(`swipe-${swipeDirection}`);
  }

  resetSwipe() {
    const card = this.elementRef.nativeElement.querySelector('.card');
    card.classList.remove('swipe-left', 'swipe-right');
  }
}
