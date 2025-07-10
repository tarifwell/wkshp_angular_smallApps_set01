import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hero_app';
}
