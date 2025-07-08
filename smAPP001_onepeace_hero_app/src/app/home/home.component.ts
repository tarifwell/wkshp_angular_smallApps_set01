import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddHeroComponent } from '../sections/add-hero/add-hero.component';
import { PickHeroComponent } from '../sections/pick-hero/pick-hero.component';
import { ShowHerosComponent } from '../sections/show-heros/show-heros.component';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    AddHeroComponent,
    PickHeroComponent,
    ShowHerosComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
