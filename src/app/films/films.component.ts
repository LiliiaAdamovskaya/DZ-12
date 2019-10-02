import { Component } from '@angular/core';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent{
    films;
    filmX: string[];
    filmName: string[];
    filmYear: number[];
  

  constructor() {
    this.filmX = ['x','x','x','x','x',]
    this.filmName = ['Anabel', 'Boat', 'Sicario', 'Patric', 'UnglyDools'];
    this.filmYear = [2019, 2018, 2017, 2016, 2015];
   }
   deleteFilm(i) {
      this.filmName.splice(i);
      this.filmYear.splice(i);
    
   }

  

}
