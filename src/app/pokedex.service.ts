import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getToken(): Promise<any> {
    const url = `https://localhost:44348/api/Auth/Login`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    let user = {
      "Usuario":"ADMIN",
      "Password":"ADMIN"
    }
    const payload = JSON.stringify(user);

    return this.http.post(url, payload, {headers : headers}).toPromise();
  }

  refreshToken(): Promise<any> {
    const url = `https://localhost:44348/api/Auth/Refresh`;

    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

    return this.http.post(url, '', {headers : headers}).toPromise();
  }

  getPokemons(): Promise<any> {
    const url = `https://localhost:44348/api/pokedex`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

    return this.http.get(url, {headers: headers}).toPromise();
  }

  getPokemonById(id: number): Promise<any> {
    const url = `https://localhost:44348/api/pokedex/data/` + id;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

    return this.http.get(url, {headers: headers}).toPromise();
  }

  getPokemonBySearch(key: string): Promise<any> {
    const url = `https://localhost:44348/api/pokedex/search/` + key;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

    return this.http.get(url, {headers: headers}).toPromise();
  }

}
