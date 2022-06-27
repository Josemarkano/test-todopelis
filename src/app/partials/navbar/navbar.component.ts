import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  busqueda?: string;

  accionMovies:any = {
    results: []
  };

  constructor(
    private _movieService: MovieService
  ) { }

  buscar(){
    this._movieService.getQuery(`&s=${this.busqueda}`)
    .subscribe(response =>{
      console.log(response);
    });
  }
  
  ngOnInit(): void {
 }

 
}
