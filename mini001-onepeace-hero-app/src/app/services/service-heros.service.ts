import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceHerosService {
  constructor() {}

  hero = {
    name: '',
    power: 0,
    imgUrl: '',
  };

  /*
  someInitialHeroes: any[] = [
    {
      name: 'D Luffy',
      power: 20,
      imgUrl:
        'https://w0.peakpx.com/wallpaper/261/829/HD-wallpaper-monkey-d-luffy-portrait-artwork-manga-one-piece.jpg',
    },
    {
      name: 'Roronoa',
      power: 15,
      imgUrl: 'https://cdn-www.konbini.com/files/2023/03/Feat-Zoro.jpg',
    },
    {
      name: 'Nami',
      power: 12,
      imgUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p0jv2vx8.jpg',
    },
    {
      name: 'Usopp',
      power: 10,
      imgUrl:
        'https://static.hitek.fr/img/actualite/ill_m/2119365002/usopptitre.jpg',
    },
    {
      name: 'Sanji',
      power: 7,
      imgUrl: 'https://weflix.fr/wp-content/uploads/2022/10/sanji-germa-66.jpg',
    },
    {
      name: 'Chopper',
      power: 6,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKmHbYSyhAC1SJTyhZsx0s8sRP3heHRBe1g&s',
    },
    {
      name: 'Robin',
      power: 5,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyy_Lodz2KCxNRbKEWfp1vJpjRwbO2qpbMsmRkdLTswbYE2lNRHi5sV-6IuRGTNHWWxfU&usqp=CAU',
    },
    {
      name: 'Zoro',
      power: 2,
      imgUrl:
        'https://media-mcetv.ouest-france.fr/wp-content/uploads/2023/10/one-piece-top-5-des-plus-grandes-faiblesses-de-roronoa-zoro-.jpg',
    },
  ];
  */

  someInitialHeroes: any[] = [
    {
      name: 'D Luffy',
      power: 20,
      imgUrl: 'assets/images/monkey-d-luffy-portrait.jpg',
    },
    {
      name: 'Roronoa',
      power: 15,
      imgUrl: 'assets/images/rorona-zoro-portrait.jpg',
    },
    {
      name: 'Nami',
      power: 12,
      imgUrl: 'assets/images/nami_portait.jpg',
    },
    {
      name: 'Usopp',
      power: 10,
      imgUrl: 'assets/images/usopp-portrait.jpg',
    },
    {
      name: 'Sanji',
      power: 7,
      imgUrl: 'assets/images/sanji-germa-portrait.jpg',
    },
    {
      name: 'Chopper',
      power: 6,
      imgUrl: 'assets/images/tony-chopper-portrait.jpg',
    },
    {
      name: 'Robin',
      power: 5,
      imgUrl: 'assets/images/nico-robin-portrait.jpg',
    },
    {
      name: 'Zoro',
      power: 2,
      imgUrl: 'assets/images/zoro-portrait.jpg',
    },
  ];

  heroes: any[] = [...this.someInitialHeroes];
}
