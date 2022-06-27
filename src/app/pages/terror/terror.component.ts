import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {
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
    this._movieService.getTerrorMovies()
      .subscribe((value:any) => {
        this.popularMovies = value;
      });
  }

  detalle(id:string){
    
    this.route.navigate(['detalles/', id])
  
  }
}
