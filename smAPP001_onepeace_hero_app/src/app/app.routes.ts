import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  //{ path: '/home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details', component: DetailsComponent },

  //{ path: 'details/:id', component: DetailsComponent },
  //{ path: '**', redirectTo: '' }
  { path: '**', component: NotFoundComponent },
];
