import { Component, ElementRef } from '@angular/core';
import { ServiceHerosService } from '../../services/service-heros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-heros',
  imports: [CommonModule],
  templateUrl: './show-heros.component.html',
  styleUrl: './show-heros.component.css',
})
export class ShowHerosComponent {
  heroes: any[] = [];

  constructor(
    private elementRef: ElementRef,
    public _serviceHeros: ServiceHerosService
  ) {}

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
