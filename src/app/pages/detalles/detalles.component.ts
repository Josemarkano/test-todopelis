import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  detail:any;

  constructor(private router: ActivatedRoute, private _movieService: MovieService ) {

    this.router.params.subscribe(params =>{
     
      this._movieService.getQuery(`movie/` + (params['id']) + `?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES`)
      .subscribe(response=>{
        this.detail = response;
        console.log(response);
        
      })
    });
   }

  ngOnInit(): void {
  }

}
