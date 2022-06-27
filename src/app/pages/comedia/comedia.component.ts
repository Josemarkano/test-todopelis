import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.scss']
})
export class ComediaComponent implements OnInit {
  popularMovies:any = {
    results: []
  };

  constructor(
    private _movieService: MovieService, private route: Router
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(){
    this._movieService.getComedyMovies()
      .subscribe((value:any) => {
        this.popularMovies = value;
      });
  }

  detalle(id:string){
    
    this.route.navigate(['detalles/', id])
  
  }
}
