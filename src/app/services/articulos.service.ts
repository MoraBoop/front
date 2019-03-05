import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  API_URI = 'http://localhost:3030/api';

  constructor(private http: HttpClient) { }
  getArticle(){
    
    return this.http.get(`${this.API_URI}/articulos`);
  }
}
