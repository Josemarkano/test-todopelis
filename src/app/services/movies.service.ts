import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  /**
   * Global vars
   */
  apiBase: string = "https://api.themoviedb.org/3/";

  /**
   * Constructor 
   * @param _http 
   */
  constructor(
    private _http : HttpClient
  ) {}

  /*
   * Global methods 
   * movie/453395?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES
   */
  getPopularMovies(): any{
   return this._http.get(`${ this.apiBase }movie/popular?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES`);
  }
  
  getQuery(query: string){
    const apiBase = `${this.apiBase}${query}`;
    return this._http.get(apiBase);
  }
  
  getActionMovies(): any{
   return this._http.get(`${ this.apiBase }discover/movie?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES&with_genres=28`);
  }

  getComedyMovies(): any{
    return this._http.get(`${ this.apiBase }discover/movie?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES&with_genres=35`);
   }
  
   getDramaMovies(): any{
    return this._http.get(`${ this.apiBase }discover/movie?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES&with_genres=18`);
   }
  
   getTerrorMovies(): any{
    return this._http.get(`${ this.apiBase }discover/movie?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES&with_genres=27`);
   }
  
}